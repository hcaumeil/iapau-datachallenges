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

    const result = await client.query("SELECT * FROM data_challenge where id='"+params.slug+"';");
    const data_challenge = result.rows;

    return new Response(JSON.stringify({
        data_challenge: data_challenge,
      }));
  } catch (error) {
    console.error('Error fetching data_challenge table:', error);
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
    let query = "UPDATE data_challenge Set ";
    Object.entries(data).forEach(([key, value]) => {
      if(typeof value === 'string' && key.includes("date")){
        query = query.concat(key+"=TO_DATE('"+value+"','DD-MM-YYYY'),");
      }else{
        query = query.concat(key+"='"+value+"',");
      }
    });
    query = query.slice(0, -1);
    query = query.concat("WHERE id = '"+params.slug+"';" );
    const result = await client.query(query);

    if(result.rowCount>0){
      return new Response(JSON.stringify({
        message: "Data_challenge modifié",
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
