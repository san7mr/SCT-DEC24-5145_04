import { 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    updateTodo, 
    setFilter 
} from './src/store/todoStore.js';
import { renderTodoList } from './src/components/todoList.js';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderTodoList();
});

// Add new task
window.addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const dateTimeInput = document.getElementById('taskDateTime');
    
    if (taskInput.value.trim() === '') return;

    addTodo(taskInput.value, dateTimeInput.value);
    taskInput.value = '';
    dateTimeInput.value = '';
    renderTodoList();
};

// Toggle task completion
window.toggleComplete = (id) => {
    toggleTodo(id);
    renderTodoList();
};

// Delete task
window.deleteTask = (id) => {
    deleteTodo(id);
    renderTodoList();
};

// Edit task
window.editTask = (id) => {
    const todo = getTodos().find(t => t.id === id);
    const newText = prompt('Edit task:', todo.text);
    
    if (newText === null || newText.trim() === '') return;
    
    updateTodo(id, newText);
    renderTodoList();
};

// Filter tasks
window.filterTasks = (filter) => {
    setFilter(filter);
    document.querySelectorAll('.list-controls button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === filter);
    });
    renderTodoList();
};