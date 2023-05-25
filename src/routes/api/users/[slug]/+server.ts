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

export async function GET({params}:any) {
  try {
    await client.connect();

    const result = await client.query("SELECT * FROM users where id='"+params.slug+"';");
    const users = result.rows;

    return new Response(JSON.stringify({
        users: users,
      }));
  } catch (error) {
    console.error('Error fetching user table:', error);
    return  new Response(JSON.stringify({
        error: 'Internal Server Error',
      }))
  } finally {
    await client.end();
  }
}

export const POST: RequestHandler = async ({ request,params }) => {
  try {
    await client.connect();
    
    const data = await request.json();
    let query = "UPDATE users Set ";
    Object.entries(data).forEach(([key, value]) => {
        query = query.concat(key+"='"+value+"',");
    });
    query = query.slice(0, -1);
    query = query.concat("WHERE id = '"+params.slug+"';" );
    console.log(query);
    const result = await client.query(query);

    if(result.rowCount>0){
      return new Response(JSON.stringify({
        message: "Utilisateur modifié",
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
