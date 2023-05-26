import { Client } from 'pg';
import {PG_USER,PG_HOST,PG_DATABASE,PG_PASSWORD,PG_PORT} from '$env/static/private';
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

    const result = await client.query("DELETE FROM data_challenge where id='"+params.slug+"';");

    if(result.rowCount>0){
        return new Response(JSON.stringify({
          message: "Data challenge supprimé",
        }));
      }
      throw error(401, {
        message: 'Id not valid'
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