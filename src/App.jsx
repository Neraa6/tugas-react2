import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (!task.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setTask('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-4">📝 My To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task..."
          className="border p-2 rounded"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
