import React from "react";

const Detail = props => {
  return (
    <div className="text">
      <span className="category">{props.category} </span>
      <span className="infos1">{props.infos1} </span>
      <span className="infos2">{props.infos2} </span>
      <span className="infos">{props.infos} </span>
    </div>
  );
};

export default Detail;
