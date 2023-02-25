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
        className="p-3 rounded-tl-xl rounded-bl-xl h-[50px] w-5/6 drop-shadow-md placeholder:text-sm"
        type="text"
        name="searchedInput"
        onChange={takeIpInput}
        value={searchedInput}
        placeholder="Search for any IP address or domain"
      ></input>
      <button
        className="bg-black p-4 rounded-tr-xl rounded-br-xl h-[50px] drop-shadow-md w-1/6"
        type="submit"
      >
        <img src="./images/icon-arrow.svg" alt="arrow" className="mx-auto" />
      </button>
    </form>
  );
}

export default Search;
