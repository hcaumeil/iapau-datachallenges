import { Client } from 'pg';
import {PG_USER,PG_HOST,PG_DATABASE,PG_PASSWORD,PG_PORT} from '$env/static/private';

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