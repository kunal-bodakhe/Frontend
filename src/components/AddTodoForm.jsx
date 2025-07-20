import React from "react";
import { useState } from "react";

function AddTodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        priority: priority,
        dueDate: dueDate,
      };
      onAddTodo(todo);
      setNewTodo("");
      setDueDate("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="add-todo-form">
      <div className="form-group">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="form-row">
        <select
          className="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <input
          type="date"
          className="date-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button className="add-btn" onClick={handleAddTodo}>
          <span>+</span>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
