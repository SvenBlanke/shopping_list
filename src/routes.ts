import express from "express";
import {
  getAllItems,
  createNewItem,
  updateItem,
  deleteItem,
  getAllStores,
  createNewStore,
  updateStore,
  deleteStore
} from "./controllers";

export const apiRouter = express.Router();

// Items REST API
apiRouter.route("/items").get(getAllItems);
apiRouter.route("/items").post(createNewItem);
apiRouter.route("/items/:id").put(updateItem);
apiRouter.route("/items/:id").delete(deleteItem);

// Stores REST API
apiRouter.route("/stores").get(getAllStores);
apiRouter.route("/stores").post(createNewStore);
apiRouter.route("/stores/:id").put(updateStore);
apiRouter.route("/stores/:id").delete(deleteStore);
