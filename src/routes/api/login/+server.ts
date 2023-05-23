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
    const { password,login } = await request.json();

    const result = await client.query("SELECT * FROM users Where password = '"+password+"' and email = '"+login+"';");

    if(result.rowCount>0){
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