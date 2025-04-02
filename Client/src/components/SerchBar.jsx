import React, { useState } from "react";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center">
         <div className="input-group mb-3">
      <span className="input-group-text">
        <i className="bi bi-search"></i> {/* Search Icon */}
      </span>
      <input
        type="text"
        className="form-control "
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
    </div>

    </div>
    </>
    
   
  );
};

export default SearchBar;
