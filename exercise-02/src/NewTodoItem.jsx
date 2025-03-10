import React, { useState } from 'react';

function NewTodoItem({ onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleSubmit = () => {
    // Don't add empty todos
    if (newTodoText.trim() === '') return;
    
    // Call the parent's function to add the new todo
    onAddTodo({
      description: newTodoText,
      isComplete: false
    });
    
    // Clear the input field
    setNewTodoText('');
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="new-todo-container">
      <input
        type="text"
        className="new-todo-input"
        placeholder="Add a new task..."
        value={newTodoText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button 
        className="new-todo-button"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </div>
  );
}

export default NewTodoItem;