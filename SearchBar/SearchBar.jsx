
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for any service..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
}

export default SearchBar;
