import React from "react";
import Loader from "react-js-loader";

const Spinner = () => {
  return (
    <div className={"row"}>
    <div className={"item"}>
      <Loader
        type="spinner-default"
        bgColor={"#DA1C5C"}
        title={"spinner-default"}
        color={"#6A52FD"}
        size={100}
      />
    </div>
    </div>
  );
};

export default Spinner;
