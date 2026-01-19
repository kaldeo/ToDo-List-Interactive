import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <div className="todo-content">
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
        />
        <span className="todo-text">{todo.text}</span>
        </div>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        &times;
        </button>
    </div>
    );
}

export default TodoItem;