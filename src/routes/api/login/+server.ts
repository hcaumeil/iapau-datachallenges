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

    const result = await client.query("SELECT password FROM users Where email = '"+login+"';");

    if(result.rowCount > 0 && result.rows[0].password == password){
      return new Response(JSON.stringify({
        valid: true,
      }));
    }
    throw error(401, {
      message: 'Wrong login or password'
    });
    
  } catch (error) {
      throw error(500, {
        message: 'Internal Server Error'
      });

    // return  new Response(JSON.stringify({
    //     error: ,
    //     code: 500,
    //   }))
  } finally {
    await client.end();
  }
}

export async function GET() {
  return new Response(JSON.stringify({error: 'Method get not allowed'}));
}