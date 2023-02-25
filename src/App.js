import { React, useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import LocationInfo from "./components/LocationInfo";

import Loading from "./components/Loading";
import Map from "./components/Map";

function App() {
  const [location, setLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const apiURL = process.env.REACT_APP_IPIFY_URL;

  const getData = async () => {
    const response = await axios.get(
      `${apiURL}ipAddress=${searchInput}&domain=${searchInput}`
    );
    //console.log(response.data);
    setLocation(response.data);
  };

  // useEffect(() => {
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchInput]);

  return (
    <>
      <div>
        <div className="flex flex-col items-center main-container place-content-around">
          <div className="text-white text-2xl font-bold">
            IP Address Tracker
          </div>
          <div className="flex flex-col w-11/12">
            <Search setSearchInput={setSearchInput} />
          </div>
        </div>
        <div className="w-11/12">
          {/* {!location && <Loading />} */}
          <LocationInfo className="" data={location} />
        </div>
        <div className="Map">
          {/* {!location && <Loading />} */}
          <Map />
          {/* {location && (
        )} */}
        </div>
      </div>
    </>
  );
}

export default App;
