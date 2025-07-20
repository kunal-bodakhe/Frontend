import React from "react";
import { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleAddTodo = () => {
    if (!priority) {
      alert("Please select a due date.");
      return;
    }
    if (!dueDate) {
      alert("Please select a due date.");
      return;
    }
    if (newTodo.trim()) {
      const todo = {
        text: newTodo.trim(),
        completed: false,
        priority: priority,
        dueDate: dueDate,
      };
      addTodo(todo);
      setNewTodo("");
      setDueDate("");
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
          required
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>

      <div className="form-row">
        <select
          className="priority-select"
          value={priority}
          required
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
          required
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button type="submit" className="add-btn" onClick={handleAddTodo}>
          <span>+</span>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default AddTodoForm;
