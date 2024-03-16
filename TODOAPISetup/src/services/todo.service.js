class ToDoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  create(todoText) {
    if (todoText.length == 0) return;
    todoText = todoText.trim().toUpperCase();
    this.todoRepository.insert(todoText);
  }

  getOneToDo(id) {
    this.todoRepository.get(id);
  }

  getAllToDos() {
    this.todoRepository.getAll();
  }
}

module.exports = ToDoService;
