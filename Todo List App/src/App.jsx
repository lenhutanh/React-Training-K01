import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Wake up at 6am', done: false },
    { id: 1, title: 'Go to school at 6:30am', done: false },
    { id: 2, title: 'Have a breakfast', done: false },
];

function App() {
    const [todos, setTodos] = useState(initialTodos);

    console.log(todos);
    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false,
            }
        ]);
    }

    function handleEditTodo(id, newText) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, title: newText } : todo));
    }

    function handleToggleTodo(id) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
    }

    function handleDeleteTodo(todoId) {
      setTodos(todos.filter(t => t.id !== todoId));
    }

    return (
        <>
          <div className="container">
            <div className="todo-app">
                <h1><img src='src/assets/images/to-do-list.png'/>To-Do List</h1>
                <AddTodo onAddTodo={handleAddTodo}/>
                <TodoList
                    todos={todos}
                    onToggleTodo={handleToggleTodo}
                    onEditTodo={handleEditTodo}
                    onDeleteTodo={handleDeleteTodo}
                />
            </div>
          </div>
        </>
    )
}

export default App;