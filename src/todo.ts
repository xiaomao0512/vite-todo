import { loadTodos, saveTodos } from "./storage";
import type { Todo } from "./types";

let todos: Todo[] = loadTodos();
const list = document.querySelector<HTMLUListElement>("#todo-list")!;
const form = document.querySelector<HTMLFormElement>("#todo-form")!;
const input = document.querySelector<HTMLInputElement>("#todo-input")!;

// 初始化時畫出所有 todo
renderTodos();

// 新增 todo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos(todos);
  input.value = "";
  renderTodos();
});

// 刪除功能（點一下就刪掉）
list.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (!target.dataset.id) return;

  const id = Number(target.dataset.id);
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos(todos);
  renderTodos();
});

// 渲染 todo 清單
function renderTodos() {
  list.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.className = "cursor-pointer hover:line-through";
    li.innerText = todo.text;
    li.dataset.id = todo.id.toString();
    list.appendChild(li);
  }
}
