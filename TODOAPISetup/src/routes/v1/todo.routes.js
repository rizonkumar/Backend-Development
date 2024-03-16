const express = require("express");
const getToDos = require("../../controllers/todo.controller");
const { createToDoValidator } = require("../../validators/todo.validator");

const todoRouter = express.Router();

todoRouter.get("/", getToDos);
todoRouter.post("/", createToDoValidator, getToDos.createToDo);
module.exports = todoRouter;
