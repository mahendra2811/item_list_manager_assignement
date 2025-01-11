import './App.css';
import React, { useState } from 'react';

function App() {
  // State to manage the list of items
  const [items, setItems] = useState([]);
  // State to manage the input field value
  const [inputValue, setInputValue] = useState('');
  // State to manage the item being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle adding a new item to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        // If editing an existing item
        const updatedItems = [...items];
        updatedItems[editIndex] = inputValue;
        setItems(updatedItems);
        setEditIndex(null); // Reset edit mode
      } else {
        // If adding a new item
        setItems([...items, inputValue]);
      }
      setInputValue(''); // Clear the input field
    }
  };

  // Function to handle deleting an item
  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Function to handle editing an item
  const handleEditItem = (index) => {
    setInputValue(items[index]); // Set input field to the item being edited
    setEditIndex(index); // Set the index of the item being edited
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
            {editIndex !== null ? 'Update Item' : 'Add Item'}
          </button>
        </div>
        <ul className="w-80">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-700 rounded-lg mb-2 text-lg flex justify-between items-center"
            >
              {item}
              <div>
                <button
                  onClick={() => handleEditItem(index)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteItem(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;