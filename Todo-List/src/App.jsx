import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Stats from './components/Stats'
import AddTodoForm from './components/AddTodoForm'
import FilterButtons from './components/FilterButtons'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Stats/>
      <AddTodoForm/>
      <FilterButtons/>
      <TodoList/>
      <Footer/>
    </>
  )
}

export default App
