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

const dbConfig = {
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: parseInt(PG_PORT),
};
const client = new Client(dbConfig);

export const GET: RequestHandler = async () => {
  await client.connect();

try {
  const result = await client.query("SELECT * FROM data_challenge");
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
    const { name,begin_date,end_date } = await request.json();
    if(!name||!begin_date||!end_date){
      throw error(400, {
        message: 'One or more attribute is undefined'
      });
    }
    console.log("INSERT INTO data_challenge (name,begin_date,end_date) VALUES('"+name+"','TO_DATE('"+begin_date+"', 'DD-MM-YYYY'),TO_DATE('"+end_date+"', 'DD-MM-YYYY'));");
    const result = await client.query("INSERT INTO data_challenge (name,begin_date,end_date) VALUES('"+name+"',TO_DATE('"+begin_date+"', 'DD-MM-YYYY'),TO_DATE('"+end_date+"', 'DD-MM-YYYY'));");

    if(result.rowCount>0){
      return new Response(JSON.stringify({
        message: "Data challenge créé",
      }));
    }
    throw error(401, {
      message: 'Informations not valid'
    });
    
  } catch (error) {
    console.error('Error fetching data_challenge table:', error);
    return  new Response(JSON.stringify({
        error: 'Internal Server Error',
      }))
  } finally {
    await client.end();
  }
}