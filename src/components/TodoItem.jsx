import React from "react";
import { useState } from "react";

// Todo Item Component
const TodoItem = ({ todo, onToggleComplete, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    const today = new Date();
    const due = new Date(dueDate);
    return due < today && due.toDateString() !== today.toDateString();
  };

  const getPriorityClass = (priority) => {
    return `priority-${priority}`;
  };

  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      onEditTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleEditKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <button
          className={`checkbox ${todo.completed ? "completed" : ""}`}
          onClick={handleToggleComplete}
        >
          {todo.completed && "✓"}
        </button>

        <div className="todo-main">
          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
              />
              <button className="action-btn save" onClick={handleSaveEdit}>
                ✓
              </button>
              <button className="action-btn cancel" onClick={handleCancelEdit}>
                ✕
              </button>
            </div>
          ) : (
            <>
              <div className={`todo-text ${todo.completed ? "completed" : ""}`}>
                {todo.text}
              </div>
              <div className="todo-meta">
                <span
                  className={`priority-badge ${getPriorityClass(
                    todo.priority
                  )}`}
                >
                  {todo.priority}
                </span>
                {todo.dueDate && (
                  <div
                    className={`due-date ${
                      isOverdue(todo.dueDate) ? "overdue" : ""
                    }`}
                  >
                    📅 {formatDate(todo.dueDate)}
                    {isOverdue(todo.dueDate) && (
                      <span style={{ fontWeight: 500 }}> (Overdue)</span>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {!isEditing && (
          <div className="todo-actions">
            <button className="action-btn edit" onClick={handleStartEdit}>
              ✏️
            </button>
            <button className="action-btn delete" onClick={handleDeleteTodo}>
              🗑️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;