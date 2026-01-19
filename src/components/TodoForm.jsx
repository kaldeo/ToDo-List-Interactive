import { useState } from 'react';

function TodoForm({ onAddTodo }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') {
            return;
        }
        onAddTodo(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Ajouter une nouvelle tâche"/>
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TodoForm;