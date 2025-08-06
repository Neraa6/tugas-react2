function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="relative bg-white p-3 mb-2 shadow rounded">
      <div className="flex items-center gap-2">
        <span
          className={`flex-1 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="absolute top-1 right-2 text-sm text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
