import express from "express";
import {
  getAllItems,
  createNewItem,
  updateItem,
  deleteItem
} from "./controllers";

export const apiRouter = express.Router();

apiRouter.route("/items").get(getAllItems);
apiRouter.route("/items").post(createNewItem);
apiRouter.route("/items").put(updateItem);
apiRouter.route("/items").delete(deleteItem);
