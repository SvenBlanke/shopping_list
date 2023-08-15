import { db } from "./db";

export async function getAllItems() {
  try {
    const results = await db.query("select * from postgres");
    console.log(results);
  } catch (err) {
    console.log(err);
  }
}

export function createNewItem() {}

export function updateItem() {}

export function deleteItem() {}
