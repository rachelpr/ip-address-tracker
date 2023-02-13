import { React, useState } from "react";

function Search(props) {
  const [searchedInput, setSearchedInput] = useState("");

  function takeIpInput(e) {
    const input = e.target.value;
    setSearchedInput(input);
  }
  function submitHandler(e) {
    e.preventDefault();
    props.setSearchInput(searchedInput);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="searchedInput"
        onChange={takeIpInput}
        value={searchedInput}
        placeholder="Search for any IP address or domain"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
