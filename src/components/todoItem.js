import { formatDateTime } from '../utils/dateFormatter.js';

export function createTodoItem(todo) {
    return `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <div class="todo-content">
                <div class="todo-text">${todo.text}</div>
                <div class="todo-date">${formatDateTime(todo.datetime)}</div>
            </div>
            <div class="todo-actions">
                <button class="complete-btn" onclick="toggleComplete(${todo.id})">
                    ${todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="edit-btn" onclick="editTask(${todo.id})">
                    Edit
                </button>
                <button class="delete-btn" onclick="deleteTask(${todo.id})">
                    Delete
                </button>
            </div>
        </li>
    `;
}