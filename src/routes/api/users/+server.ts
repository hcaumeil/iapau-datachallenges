import { Client } from "pg";
import {
  PG_USER,
  PG_HOST,
  PG_DATABASE,
  PG_PASSWORD,
  PG_PORT,
} from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import { error, json } from "@sveltejs/kit";
import { sha256 } from 'js-sha256';


const dbConfig = {
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: parseInt(PG_PORT),
};
const client = new Client(dbConfig);

export const GET: RequestHandler = async ({request}) => {
  await client.connect();

try {
  const headers = request.headers;
  const mail = headers.get('email')
  if(mail){
    const checkEmailQuery = `SELECT COUNT(*) FROM users WHERE email = '${mail}';`;
    const emailResult = await client.query(checkEmailQuery);
    const emailCount = emailResult.rows[0].count;
    const role = "user";
    if (emailCount > 0) {
      throw error(400, {
        message: 'Email is already taken'
      });
    }else{
      return json({ message: 'Email can be taken' });
    }
  }
  const result = await client.query("SELECT * FROM users");
  const usersJson = JSON.stringify(result.rows);

  return new Response(usersJson);

} catch (error) {
  console.error("Error fetching user table:", error);
  return new Response(JSON.stringify({
    error: 'Internal Server Error'
    }));
    } finally {
      await client.end();
    }
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    await client.connect();
    const { email,surname,name,password,study_level,town,school } = await request.json();
    if(!email||!surname||!name||!password||!study_level||!town||!school){
      throw error(400, {
        message: 'One or more attribute is undefined'
      });
    }
    const checkEmailQuery = `SELECT COUNT(*) FROM users WHERE email = '${email}';`;
    const emailResult = await client.query(checkEmailQuery);
    const emailCount = emailResult.rows[0].count;

    if (emailCount > 0) {
      return new Response(JSON.stringify({
        message: 'Email already taken',
      }));
    }
    const sel = generateRandomString(16);
    const hashed_password = sha256(password);
    const role = "user";
    const result = await client.query("INSERT INTO users (email,surname,name,password,salt,level,study_level,town,school,role) VALUES('"+email+"','"+surname+"','"+name+"','"+hashed_password+"','"+sel+"',0,'"+study_level+"','"+town+"','"+school+"','"+role+"');");

    if(result.rowCount>0){
      return new Response(JSON.stringify({
        message: "Utilisateur créé",
      }));
    }
    throw error(401, {
      message: 'Informations not valid'
    });
    
  } catch (error) {
    console.error('Error fetching user table:', error);
    return  new Response(JSON.stringify({
        error: 'Internal Server Error',
      }))
  } finally {
    await client.end();
  }
}

function generateRandomString(length:number) {
  let result = '';
  const characters = '*$&é(-è_çà)ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

