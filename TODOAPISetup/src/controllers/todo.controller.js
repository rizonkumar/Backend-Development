const ToDoService = require("../services/todo.service");
const ToDoRepository = require("../repositories/todo.repository");

const todoService = new ToDoService(new ToDoRepository());

function getToDos(req, res) {
  const response = todoService.getAllToDos();
  return res.json({
    data: response,
  });
}

function createToDo(req, res) {
  const todoText = req.body.todoText;
  todoService.create(todoText);
  return res.json({
    data: "New todo created",
  });
}

module.exports = {
  getToDos,
  createToDo,
};
