import { useState } from "react";

export default Search = ({ setFilteredCards, teammates }) => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      setErrorMessage("");

      if (searchInput != "" && searchInput.length < 3) {
        setErrorMessage("Please enter at least 3 letters");
        return;
      }

      const filteredMembers = filterMembers();
      filteredMembers.length > 0
        ? setFilteredCards(filteredMembers)
        : setErrorMessage("Member not found");
    } catch (e) {
      console.log(e);
    }
  };

  const filterMembers = () => {
    return teammates.filter((member) => {
      return (
        member.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        member.company.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        onChange={(event) => setSearchInput(event.target.value)}
        placeholder="Enter member name"
      />
      <button>Search</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};
