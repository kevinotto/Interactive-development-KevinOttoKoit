import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for meals..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;