let todos = [];
let currentFilter = 'all';

export function getTodos() {
    return todos;
}

export function getFilteredTodos() {
    return todos.filter(todo => {
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true;
    });
}

export function addTodo(text, datetime) {
    const newTask = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        datetime: datetime || new Date().toISOString().slice(0, 16)
    };
    todos.unshift(newTask);
}

export function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
}

export function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
}

export function updateTodo(id, newText) {
    todos = todos.map(todo => 
        todo.id === id ? {...todo, text: newText.trim()} : todo
    );
}

export function setFilter(filter) {
    currentFilter = filter;
}

export function getCurrentFilter() {
    return currentFilter;
}