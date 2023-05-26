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
  console.log("debut de la fonction POST");
  try {
    console.log("debut du try");
    await client.connect();
    console.log("après le await client.connect()");
    const { password,login } = await request.json();
    console.log("login récupéré : "+login + ", password récupéré : "+password);

    const result = await client.query("SELECT password FROM users Where email = '"+login+"';");

    if(result.rowCount > 0 && result.rows[0].password == password){
      console.log("on est dans le if");
      return new Response(JSON.stringify({
        valid: true,
      }));
    }
    throw error(401, {
      message: 'Wrong login or password'
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