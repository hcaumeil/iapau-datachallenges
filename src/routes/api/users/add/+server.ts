import { Client } from 'pg';
import {PG_USER,PG_HOST,PG_DATABASE,PG_PASSWORD,PG_PORT} from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

const dbConfig = {
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: parseInt(PG_PORT)
};

const client = new Client(dbConfig);

export const POST: RequestHandler = async ({ request }) => {
  try {
    await client.connect();
    const { email,surname,name,password,study_level,town,school,role,id_team } = await request.json();

    const result = await client.query("INSERT INTO users (email,surname,name,password,salt,level,study_level,town,school,role) VALUES('"+email+"','"+surname+"','"+name+"','"+password+"','sel',0,'"+study_level+"','"+town+"','"+school+"','"+role+"');");

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

export async function GET() {
  return new Response(JSON.stringify({error: 'Method get not allowed'}));
}