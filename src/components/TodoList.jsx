import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  filter,
  onToggleComplete,
  onDeleteTodo,
  onEditTodo,
}) {
  const getFilteredTodos = () => {
    return todos.filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });
  };

  const filteredTodos = getFilteredTodos();

  const renderEmptyState = () => (
    <div className="empty-state">
      <div className="title">No todos found</div>
      <div className="subtitle">
        {filter === "all" ? "Add your first todo above!" : `No ${filter} todos`}
      </div>
    </div>
  );

  const renderTodos = () =>
    filteredTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleComplete={onToggleComplete}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
      />
    ));

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? renderEmptyState() : renderTodos()}
    </div>
  );
};

export default TodoList;
