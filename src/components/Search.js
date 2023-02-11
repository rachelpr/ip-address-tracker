import { React, useState } from "react";

function Search(props) {
  const [searchedIp, setSearchedIp] = useState("");

  function takeIpInput(e) {
    const input = e.target.value;
    setSearchedIp(input);
  }
  function submitHandler(e) {
    e.preventDefault();
    props.setIp(searchedIp);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="searchedIp"
        onChange={takeIpInput}
        value={searchedIp}
        placeholder="Search for any IP address or domain"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
