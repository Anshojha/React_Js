import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState('');  // Input JSON data
  const [response, setResponse] = useState(null); // API response
  const [error, setError] = useState('');         // Validation error
  const [selectedOptions, setSelectedOptions] = useState([]); // Filters

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonData);  // Parse input JSON
      const res = await axios.post('http://localhost:3000/bfhl', { data: parsedData.data });
      setResponse(res.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON input or request failed.');
      console.error(err);
    }
  };

  // Handle checkbox changes for filters
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="App">
      <h1>Data Processing App</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
          placeholder='Enter JSON data like { "data": ["A", "1", "b", "2"] }'
          rows={8}
          cols={50}
        />
        <br />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {/* Display checkboxes for filters */}
      {response && (
        <div className="filters">
          <label>
            <input
              type="checkbox"
              value="numbers"
              onChange={() => handleCheckboxChange('numbers')}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              value="alphabets"
              onChange={() => handleCheckboxChange('alphabets')}
            />
            Alphabets
          </label>
          <label>
            <input
              type="checkbox"
              value="highest_alphabet"
              onChange={() => handleCheckboxChange('highest_alphabet')}
            />
            Highest Lowercase Alphabet
          </label>
        </div>
      )}

      {/* Render the response data based on selected filters */}
      {response && (
        <div className="response">
          <h3>Response:</h3>
          {selectedOptions.includes('numbers') && (
            <p>Numbers: {JSON.stringify(response.numbers)}</p>
          )}
          {selectedOptions.includes('alphabets') && (
            <p>Alphabets: {JSON.stringify(response.alphabets)}</p>
          )}
          {selectedOptions.includes('highest_alphabet') && (
            <p>Highest Lowercase Alphabet: {JSON.stringify(response.highest_alphabet)}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
