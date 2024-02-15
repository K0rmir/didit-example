import pg from "pg";
import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config(); //This allows us to use environment variables like the DATABASE_URL

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });
