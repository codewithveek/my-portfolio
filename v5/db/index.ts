import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";

function getDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return databaseUrl;
}

const connection = createPool({
  uri: getDatabaseUrl(),
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60_000,
  queueLimit: 0,
});
export const db = drizzle(connection, { mode: "planetscale" });
