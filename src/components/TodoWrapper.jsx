import { useState } from 'react';
import { nanoid } from 'nanoid';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoStats from './TodoStats';

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: nanoid(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <h1>Ma Todo List</h1>
      <TodoStats todos={todos} />
      <TodoForm onAddTodo={addTodo} />
      <div className="todos-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoWrapper