// Expanded Sample Data with More Tasks
const todos = [
  { id: 1, text: "Define project scope", status: "backlog" },
  { id: 2, text: "Design UI components", status: "todo" },
  { id: 3, text: "Develop backend API", status: "ongoing" },
  { id: 4, text: "Testing and QA", status: "done" },
  { id: 5, text: "Set up development environment", status: "backlog" },
  { id: 6, text: "Create wireframes", status: "todo" },
  { id: 7, text: "Implement authentication", status: "ongoing" },
  { id: 8, text: "Review code standards", status: "done" },
  { id: 9, text: "Integrate third-party APIs", status: "backlog" },
  { id: 10, text: "Prepare deployment scripts", status: "todo" },
  { id: 11, text: "Performance optimization", status: "ongoing" },
  { id: 12, text: "Deploy to staging environment", status: "done" },
  { id: 13, text: "Gather user feedback", status: "backlog" },
  { id: 14, text: "Refactor codebase", status: "todo" },
  { id: 15, text: "Fix critical bugs", status: "ongoing" },
  { id: 16, text: "Finalize documentation", status: "done" }
];

// Function to render todos in their respective sections
function renderTodos() {
  const statuses = ["backlog", "todo", "ongoing", "done"];
  statuses.forEach(status => {
      const list = document.querySelector(`#${status} .todo-list`);
      list.innerHTML = '';
      todos
          .filter(todo => todo.status === status)
          .forEach(todo => {
              const listItem = document.createElement('li');
              listItem.className = 'todo-item';
              listItem.innerHTML = `
                  <span>${todo.text}</span>
                  <div class="todo-buttons">
                      <button class="button button-left" onclick="moveTodo(${todo.id}, -1)" ${status === 'backlog' ? 'disabled' : ''}>←</button>
                      <button class="button button-right" onclick="moveTodo(${todo.id}, 1)" ${status === 'done' ? 'disabled' : ''}>→</button>
                  </div>
              `;
              list.appendChild(listItem);
          });
  });
}

// Function to move todos between statuses
function moveTodo(id, direction) {
  const statusOrder = ["backlog", "todo", "ongoing", "done"];
  const todo = todos.find(t => t.id === id);
  const currentIndex = statusOrder.indexOf(todo.status);
  const newIndex = currentIndex + direction;

  // Move todo if within valid range
  if (newIndex >= 0 && newIndex < statusOrder.length) {
      todo.status = statusOrder[newIndex];
      renderTodos();
  }
}

// Initialize the todo list
document.addEventListener('DOMContentLoaded', renderTodos);
