import React from 'react';


function ToDoList(props) {
    // Check if items exists and has elements
    const hasItems = props.items && props.items.length > 0;
    
    // Handle checkbox change
    const handleCheckboxChange = (index) => {
      // If the onTodoStatusChanged prop exists, call it with the index and the new status
      if (props.onTodoStatusChanged) {
        props.onTodoStatusChanged(index, !props.items[index].isComplete);
      }
    };
    
    // Handle delete button click
    const handleDelete = (index) => {
      // If the onTodoDelete prop exists, call it with the index
      if (props.onTodoDelete) {
        props.onTodoDelete(index);
      }
    };
    
    return (
      <div className="todo-container">
        <h2>My todos</h2>
        {hasItems ? (
          <ul className="todo-list">
            {props.items.map((item, index) => (
              <li 
                key={index} 
                className={`todo-item ${item.isComplete ? 'complete' : 'incomplete'}`}
              >
                <input 
                  type="checkbox" 
                  className="todo-checkbox"
                  checked={item.isComplete} 
                  onChange={() => handleCheckboxChange(index)}
                />
                <span className="todo-text">{item.description}</span>
                {item.isComplete && <span className="todo-status">(Done!)</span>}
                <button 
                  className="todo-delete-btn"
                  onClick={() => handleDelete(index)}
                  aria-label="Delete todo"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-list">There are no to-do items!</p>
        )}
      </div>
    );
  }

// function ToDoList(props) {
//     // Check if items exists and has elements
//     const hasItems = props.items && props.items.length > 0;
    
//     // Handle checkbox change
//     const handleCheckboxChange = (index) => {
//       // If the onTodoStatusChanged prop exists, call it with the index and the new status
//       if (props.onTodoStatusChanged) {
//         props.onTodoStatusChanged(index, !props.items[index].isComplete);
//       }
//     };
    
//     return (
//       <div className="todo-container">
//         <h2>My todos</h2>
//         {hasItems ? (
//           <ul className="todo-list">
//             {props.items.map((item, index) => (
//               <li 
//                 key={index} 
//                 className={`todo-item ${item.isComplete ? 'complete' : 'incomplete'}`}
//               >
//                 <input 
//                   type="checkbox" 
//                   className="todo-checkbox"
//                   checked={item.isComplete} 
//                   onChange={() => handleCheckboxChange(index)}
//                 />
//                 {item.description} 
//                 {item.isComplete && " (Done!)"}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="empty-list">There are no to-do items!</p>
//         )}
//       </div>
//     );
//   }

// Exercise Seven - Stateful to-do list

// function ToDoList(props) {
//     // Check if items exists and has elements
//     const hasItems = props.items && props.items.length > 0;
    
//     return (
//       <>
//         {hasItems ? (
//           <ul>
//             {props.items.map((item, index) => (
//               <li key={index}>
//                 <input 
//                   type="checkbox" 
//                   checked={item.isComplete} 
//                   value={item.description}
//                   readOnly
//                 />
//                 {" "}
//                 {item.description} 
//                 {item.isComplete && " (Done!)"}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>There are no to-do items!</p>
//         )}
//       </>
//     );
//   }

// Exercise Four - A basic to-do list

// function ToDoList(props) {
//   return (
//     <ul>
//       {props.items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// Exercise Five - Conditional rendering

// function ToDoList(props) {
//     // Check if items exists and has elements
//     const hasItems = props.items && props.items.length > 0;
    
//     return (
//       <>
//         {hasItems ? (
//           <ul>
//             {props.items.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>There are no to-do items!</p>
//         )}
//       </>
//     );
//   }

export default ToDoList;