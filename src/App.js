import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Context from './context';
import AddTodo from './TodoAdd';
import Loading from './Loading';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: 'Купить хлеб', completed: false },
    // { id: 2, title: 'Купить масло', completed: true },
    // { id: 3, title: 'Купить зерно', completed: false },
  ]);
  const [load, setLoad] = useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(response => response.json())
  .then(json => setTodos(json))
    setTimeout(()=>{
      setLoad(false)
    },2000) 
  }, [])

   function todoAdd(title){
     setTodos(
       todos.concat([{
         title,
         id: Date.now(),
         checked: false

        } ])
     )
     console.log(todos)
   }
  function todoRemove(id) {
    // eslint-disable-next-line
    setTodos(todos.filter((item) => item.id !== id));
  }

  function todoCompleted(id) {
    // eslint-disable-next-line
    setTodos(
      todos.filter((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return todos;
      })
    );
  }

  return (
    <Context.Provider value={{ todoCompleted, todoRemove, todoAdd }}>
      <div className="container-sm">
        <AddTodo />
        {load ? <Loading/>: todos.length > 0 
        ? <TodoList todos={todos} /> :
        <p>Todo list empty</p>
         }
       
        
       
      </div>
    </Context.Provider>
  );
}

export default App;
