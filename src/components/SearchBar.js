// components/SearchBar.js
import React from 'react';
import './SearchBar.css'; // Optional: Add styles as needed

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search notes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
