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

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <>
      <div className="cursor-pointer">
        <div className="flex flex-col items-center main-container">
          <div className="text-white text-2xl font-bold pt-7">
            IP Address Tracker
          </div>
          <div className="pt-5 w-11/12 md:w-1/3">
            <Search setSearchInput={setSearchInput} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          {!location && <Loading />}
          {location && <LocationInfo data={location} />}
        </div>
        <div className="Map">
          {!location && <Loading />}
          {location && (
            <Map lat={location.location.lat} lng={location.location.lng} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
