import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import AddTodoForm from "./components/AddTodoForm";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import config from "./config";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const host = config.host;
  const todosUrl = config.todosUrl;

  //Fetch all todos
  useEffect(() => {
    axios
      .get(`${host}${todosUrl}`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.error("Error fetching todos:", err);
      });
  }, []);

  //Add todo
  const addTodo = async (todo) => {
    try {
      const res = await axios.post(`${host}${todosUrl}`, todo);
      setTodos((prevTodos) => [...prevTodos, res.data]);
    } catch (err) {
      console.error("Failed to add todo:", err);
    }
  };

  // Edit todo
  const editTodo = async (id, newText) => {
    try {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      const updatedTodo = {
        ...todo,
        text: newText, // only change the text, keep everything else
      };

      await axios.put(`${host}${todosUrl}/${id}`, updatedTodo);

      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === id ? updatedTodo : t))
      );
    } catch (error) {
      console.error(
        "Failed to update todo:",
        error.response?.data || error.message
      );
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${host}${todosUrl}/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(
        "Failed to delete todo:",
        error.response?.data || error.message
      );
    }
  };

  // Toggle completed state 
  const toggleComplete = async (id) => {
    try {
      const todo = todos.find((t) => t.id === id);
      const updated = { ...todo, completed: !todo.completed };
      await axios.put(`${host}${todosUrl}/${id}`, updated);

      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === id ? updated : t))
      );
    } catch (error) {
      console.error(
        "Failed to toggle todo:",
        error.response?.data || error.message
      );
    }
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
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
  );
}

export default App;
