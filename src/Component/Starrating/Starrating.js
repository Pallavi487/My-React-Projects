import React, { useState } from "react";

const Starrarting = () => {
  const [rating, setRating] = useState(0);

  const fullstarrating = (i) => {
    setRating(i + 1);
  };

  const halfstarrating = (i) => {
    setRating(i + 0.5);
  };
  return (
    <div className="text-4xl  flex justify-center items-center">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="relative ">
          <span
            className={`${rating >= index + 1 ? "text-yellow-600" : ""}`}
            onClick={() => fullstarrating(index)}
          >
            ★
          </span>
          <span
            className={`absolute top-0 left-0 ${
              rating > index ? "text-yellow-600" : ""
            }`}
            style={{
              clipPath: "inset(0 50% 0 0)",
            }}
            onClick={() => halfstarrating(index)}
          >
            ★
          </span>
        </span>
      ))}
      <h1> Rating:{rating}</h1>
    </div>
  );
};

export default Starrarting;
