import React from "react";

function LocationInfo(props) {
  //const data = { props };
  //console.log(props);
  return (
    <div className="bg-white">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">IP Address</span>
        <span>12.34.56.78</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">Location</span>
        <span>Lower Sackville</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">Timezone</span>
        <span>-05:00</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">ISP</span>
        <span>Eastlink</span>
      </div>
    </div>
  );
}

export default LocationInfo;
