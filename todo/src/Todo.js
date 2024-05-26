import { useState } from "react";
import "./styles.css";

function generateId() {
  return Math.floor(Math.random() * 1000000);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos(todos.concat({ id: generateId(), text: input }));
    setInput("");
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="todo">
              <span>{todo.text}</span>
              <button
                className="close"
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
