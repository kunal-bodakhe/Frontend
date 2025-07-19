import React from "react";

function AddTodoForm() {
  return (
    <>
      <div class="add-todo-form">
        <div class="form-group">
          <input
            type="text"
            id="new-todo-input"
            class="todo-input"
            placeholder="Add a new todo..."
          />
        </div>

        <div class="form-row">
          <select id="priority-select" class="priority-select">
            <option value="low">Low Priority</option>
            <option value="medium" selected>
              Medium Priority
            </option>
            <option value="high">High Priority</option>
          </select>

          <input type="date" id="due-date-input" class="date-input" />

          <button id="add-todo-btn" class="add-btn">
            <i class="fas fa-plus"></i>
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}


export default AddTodoForm;