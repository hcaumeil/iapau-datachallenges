import { Client } from "pg";
import {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER,
} from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

const dbConfig = {
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: parseInt(PG_PORT),
};

const client = new Client(dbConfig);

export const POST: RequestHandler = async ({ request }) => {
  try {
    await client.connect();
    const { password, login } = await request.json();

    const result = await client.query(
      "SELECT password FROM users WHERE email = '" + login + "';",
    );

    console.log(result);
    if (result.rowCount > 0 && result.rows[0].password == password) {
      return new Response(JSON.stringify({
        valid: true,
      }));
    } else {
      return new Response(
        JSON.stringify({ error: "Wrong Login or password" }),
        { status: 401 },
      );
    }
  } catch (error) {
    throw error(500, {
      message: error,
    });
    // return new Response(JSON.stringify({error: "Internal Server Error"}), { status: 500 });
  } finally {
    await client.end();
  }
};

export async function GET() {
  return new Response(JSON.stringify({ error: "Method get not allowed" }));
}
