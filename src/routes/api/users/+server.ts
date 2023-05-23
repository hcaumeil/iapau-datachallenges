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

export const GET: RequestHandler = async () => {
  const client = new Client(dbConfig);
  await client.connect();

try {
  const result = await client.query("SELECT * FROM users");
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