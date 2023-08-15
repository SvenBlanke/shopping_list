import express from "express";
import {
  getAllItems,
  createNewItem,
  updateItem,
  deleteItem
} from "./controllers";

export const apiRouter = express.Router();

apiRouter.route("/items").get(getAllItems);
apiRouter.route("/items/:id").post(createNewItem);
apiRouter.route("/items/:id").put(updateItem);
apiRouter.route("/items/:id").delete(deleteItem);
