import React, { useState } from "react";


const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
    <div className="container">
      <h1>My TO-DOs</h1>
      <div className="container2">
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="What do you need to do?"
          />
        </li>
        {/* Displaying the list of todos */}
        {todos.map((item, index) => (
          <li key={index}>
            {item} <i className="fas fa-trash-alt" onClick={() => handleDelete(index)}></i>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <p>{todos.length} tasks</p>
      </div>
    </div>
  );
};

export default Home;