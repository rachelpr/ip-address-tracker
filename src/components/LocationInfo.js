import React from "react";

function LocationInfo(props) {
  // const data = { props };
  // console.log(props);
  return (
    <div className="absolute location-container bg-white flex flex-col items-center w-11/12 rounded-xl pt-4 pb-4 sm:w-3/4 sm:flex-row sm:justify-around sm:pb-6 sm:pt-6">
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-[0.5rem] text-dark-gray font-bold uppercase tracking-widest pb-1">
          IP Address
        </span>
        <span className="text-lg font-medium pb-2">{props.data.ip}</span>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-[0.5rem] text-dark-gray font-bold uppercase tracking-widest pb-1">
          Location
        </span>
        <span className="text-lg font-medium pb-2">
          {props.data.location.country}
        </span>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-[0.5rem] text-dark-gray font-bold uppercase tracking-widest pb-1">
          Timezone
        </span>
        <span className="text-lg font-medium pb-2">
          UTC {props.data.location.timezone}
        </span>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-[0.5rem] text-dark-gray font-bold uppercase tracking-widest pb-1">
          ISP
        </span>
        <span className="text-lg font-medium">{props.data.isp}</span>
      </div>
    </div>
  );
}

export default LocationInfo;
