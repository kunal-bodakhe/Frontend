import { useState, useEffect } from "react";
// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AddTodoForm from "./components/AddTodoForm";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
// import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Complete React project",
      completed: false,
      priority: "high",
      dueDate: "2025-07-25",
    },
    {
      id: 2,
      text: "Review code changes",
      completed: true,
      priority: "medium",
      dueDate: "2025-07-20",
    },
    {
      id: 3,
      text: "Update documentation",
      completed: false,
      priority: "low",
      dueDate: "2025-07-30",
    },
  ]);

  useEffect(() => {
    fetch("https://todo-backend-lyf0.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  const [filter, setFilter] = useState("all");

  // Todo Operations
  const addTodo = (todo) => {
    fetch("https://todo-backend-lyf0.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        // update state with the response from server
        setTodos((prevTodos) => [...prevTodos, data]);
      })
      .catch((err) => {
        console.error("Failed to add todo:", err);
      });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Stats todos={todos} />
        <AddTodoForm addTodo={addTodo} />
        <FilterButtons currentFilter={filter} onFilterChange={changeFilter} />
        <TodoList
          todos={todos}
          filter={filter}
          onToggleComplete={toggleComplete}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
        <Footer todos={todos} />
      </div>
    </>
  );
}

export default App;
