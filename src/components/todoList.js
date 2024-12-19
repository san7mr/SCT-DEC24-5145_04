import { createTodoItem } from './todoItem.js';
import { getFilteredTodos } from '../store/todoStore.js';

export function renderTodoList() {
    const todoList = document.getElementById('todoList');
    const filteredTodos = getFilteredTodos();
    todoList.innerHTML = filteredTodos.map(createTodoItem).join('');
}