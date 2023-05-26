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
    const result = await client.query("SELECT * FROM data_project");
    const teamJson = JSON.stringify(result.rows);
  
    return new Response(teamJson);
  
  } catch (error) {
    console.error("Error fetching data_project table:", error);
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
    const { name, description, image, contact, ressources } = await request.json();
    if(!name||!description||!image||!contact||!ressources){
      throw error(400, {
        message: 'One or more attribute is undefined'
      });
    }
    const result = await client.query("INSERT INTO data_project (name, description, image, contact, ressources) VALUES ($1, $2, $3, $4, $5)", [name, description, image, contact, ressources]);


    if(result.rowCount>0){
      return new Response(JSON.stringify({
        message: "Projet data créé",
      }));
    }
    throw error(401, {
      message: 'Informations not valid'
    });
    
  } catch (error) {
    console.error('Error fetching data_project table:', error);
    return  new Response(JSON.stringify({
        error: 'Internal Server Error',
      }))
  } finally {
    await client.end();
  }
}