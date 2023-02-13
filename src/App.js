import { React, useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import LocationInfo from "./components/LocationInfo";
import Loading from "./components/Loading";

function App() {
  const [location, setLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const apiURL = process.env.REACT_APP_IPIFY_URL;

  const getData = async () => {
    const response = await axios.get(
      `${apiURL}ipAddress=${searchInput}&domain=${searchInput}`
    );
    console.log(response.data);
    setLocation(response.data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <Search setSearchInput={setSearchInput} />
      {!location && <Loading />}
      {location && <LocationInfo data={location} />}
    </div>
  );
}

export default App;
