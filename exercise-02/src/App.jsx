import React, { useState } from 'react';
import './index.css';
import AboutMe from './AboutMe';
import ToDoList from './ToDoList';
import LightBulb from './LightBulb';
import NewTodoItem from './NewTodoItem';

function App() {

  // const todos = [
  //   { description: "Finish lecture", isComplete: true },
  //   { description: "Do homework", isComplete: false },
  //   { description: "Sleep", isComplete: true },
  // ];

  // Initialize todos as state
  const initialTodos = [
    { description: "Finish lecture", isComplete: true },
    { description: "Do homework", isComplete: false },
    { description: "Sleep", isComplete: true },
  ];
  
  const [todos, setTodos] = useState(initialTodos);

  // Function to handle todo status changes
  const handleTodoStatusChanged = (index, newStatus) => {
    // Log to console to verify it's working
    console.log(`Todo ${index} status changed to: ${newStatus}`);
    
    // Create a new array with the updated todo
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        // Return a new object with the updated isComplete status
        return { ...todo, isComplete: newStatus };
      }
      // Return unchanged todos
      return todo;
    });
    
    // Update the state with the new array
    setTodos(updatedTodos);
  };

  const handleAddTodo = (newTodo) => {
    // Add the new todo to the list
    setTodos([...todos, newTodo]);
  };

    // Function to delete a todo
  const handleDeleteTodo = (index) => {
    // Log to console to verify it's working
    console.log(`Deleting todo at index: ${index}`);
    
    // Create a new array without the deleted todo
    const updatedTodos = todos.filter((_, i) => i !== index);
    
    // Update the state with the new array
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AboutMe 
          name="Hachi" 
          age={23} 
          favoriteFood="sushi and matcha ice cream 🍣🍵" 
        />
      </header>

      {/* <h2>My Todo List:</h2>
        <ToDoList 
          // items={["Finish lecture", "Do homework", "Sleep"]} 
          items={[]} 
        /> */}

      {/* <h2>My Todo List:</h2>
      <ToDoList items={todos} /> */}


        <NewTodoItem onAddTodo={handleAddTodo} />

        <h2>My Todo List:</h2>
        <ToDoList 
        items={todos} 
        onTodoStatusChanged={handleTodoStatusChanged}
        onTodoDelete={handleDeleteTodo}
      />

      <h2>Interactive Light Bulb:</h2>
      <LightBulb />
    </div>
  );
}

export default App;
