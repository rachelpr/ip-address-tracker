import React from "react";

function LocationInfo(props) {
  //const data = { props };
  console.log(props);
  return (
    <div>
      <h1>Location Info</h1>
      <h1>IP Address: {props.data.ip}</h1>
      <h1>Location: {props.data.location.country}</h1>
      <h1>Timezone: {props.data.location.timezone}</h1>
      <h1>ISP: {props.data.isp}</h1>
    </div>
  );
}

export default LocationInfo;
