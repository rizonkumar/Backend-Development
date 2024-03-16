const todos = [];

class ToDoRepository {
  insert(todoText) {
    todos.push({
      id: todos.length,
      text: todoText,
    });
  }

  getAll() {
    return todos;
  }

  getId(id) {
    return todos.filter((todo) => todo.id == id)[0];
  }
}

module.exports = ToDoRepository;
