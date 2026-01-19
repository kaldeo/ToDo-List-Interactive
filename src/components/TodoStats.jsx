import './TodoStats.css';

function TodoStats({ todos }) {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const remainingTasks = totalTasks - completedTasks;

    return (
    <div className="todo-stats">
        <div className="stat-item">
        <span className="stat-label">Total :</span>
        <span className="stat-value">{totalTasks}</span>
        </div>
        <div className="stat-item">
        <span className="stat-label">Complétées :</span>
        <span className="stat-value">{completedTasks}</span>
        </div>
        <div className="stat-item">
        <span className="stat-label">Restantes :</span>
        <span className="stat-value">{remainingTasks}</span>
        </div>
    </div>
    );
}

export default TodoStats;