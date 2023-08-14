import express from "express";
import { apiRouter } from "./src/routes";
import { connectToDatabase } from "./src/db";

const app = express();
app.use(express.json());
app.use("/api", apiRouter);
const port = process.env.PORT || 5000;

async function start() {
  let retries = 5;
  while (retries) {
    try {
      connectToDatabase();
      return;
    } catch (error) {
      console.log("Retrying...");
      retries -= 1;
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
}

start().then(() => {
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
});
