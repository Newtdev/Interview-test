import React from "react";
import { Rings } from "react-loader-spinner";

function LoadingIndicator() {
  return (
    <div>
      <Rings
        height="120"
        width="120"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default LoadingIndicator;
