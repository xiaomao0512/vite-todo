import type { Todo } from "./types";

// 取得儲存的 todos，如果沒有就回傳空陣列
export function loadTodos(): Todo[] {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}

// 儲存 todos 到 localStorage
export function saveTodos(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
