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
import { sha256 } from "js-sha256";

const dbConfig = {
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: parseInt(PG_PORT),
};

const client = new Client(dbConfig);
await client.connect();

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { password, login } = await request.json();

    const result = await client.query(
      "SELECT password,salt FROM users WHERE email = '" + login + "';",
    );

    console.log(result);
    if (
      result.rowCount > 0 &&
      sha256(password + result.rows[0].salt) == result.rows[0].password
    ) {
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
  }
};

export async function GET() {
  return new Response(JSON.stringify({ error: "Method get not allowed" }));
}
