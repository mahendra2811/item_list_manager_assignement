
import './App.css';
import React, { useState } from 'react';

function App() {
  // State to manage the list of items
  const [items, setItems] = useState([]);
  // State to manage the input field value
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new item to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-8">Item List Manager</h1>
        <div className="flex items-center mb-8">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter an item"
            className="px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddItem}
            className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </div>
        <ul className="w-80">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-700 rounded-lg mb-2 text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
