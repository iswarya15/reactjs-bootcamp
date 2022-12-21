import { useState } from "react";
import "./search.css";

const Search = ({ listOfMembers, setFilteredMembers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredMembers(
      listOfMembers.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter name here"
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
