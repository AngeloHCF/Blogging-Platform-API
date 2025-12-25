import dotenv from "dotenv";
dotenv.config();

export const {
  PORT = 3000,
  DB_PORT = 5432,
  DB_HOST = DB_HOST,
  DB_PASSWORD = DB_PASSWORD,
  DB_USER = DB_USER,
  DB_DATABASE = DB_DATABASE,
} = process.env;
