import React from "react";

function Shimmer() {
  return (
    <div className="rest-list">
      {Array(20)
        .fill("")
        .map((e, i) => {
          return <div key={i} className="shimmer-card"></div>;
        })}
    </div>
  );
}

export default Shimmer;
