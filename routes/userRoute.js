import express from "express";
import { create, deleteUser, getAll, getOne, update, view } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
route.get("/view/:id", view);

export default route;

