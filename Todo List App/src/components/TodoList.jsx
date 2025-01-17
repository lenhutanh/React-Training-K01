import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleTodo, onEditTodo, onDeleteTodo }) => {
    return (
        <>
            {todos.some((todo) => !todo.done) && <h2>To do</h2>}
            <ul>
                {todos
                .filter(todo => !todo.done)
                .map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleTodo={onToggleTodo}
                        onEditTodo={onEditTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </ul>
            {todos.some((todo) => todo.done) && <h2>Completed</h2>}
            <ul>
                {todos
                .filter(todo => todo.done)
                .map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleTodo={onToggleTodo}
                        onEditTodo={onEditTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </ul>
        </>
    )
}

export default TodoList;