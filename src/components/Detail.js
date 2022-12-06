import React from "react";

const Detail = (props) => {
  return (
    <div>
      <p className="text-lg md:text-2xl font-semibold md:font-bold mb-5 md:mb-5">
      {props.title}
      </p>
      <p className="border-b pb-5">{props.detail}</p>
    </div>
  );
};

export default Detail;
