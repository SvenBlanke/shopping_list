import { Client } from "pg";

export function connectToDatabase() {
  const client = new Client({
    user: "postgres",
    host: "db",
    database: "shopping_list_db",
    password: "postgres",
    port: 5432
  });
  client.connect(() => {
    console.log("Connected to Database");
  });
}
