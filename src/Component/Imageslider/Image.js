import React, { useEffect, useState } from "react";

const UNSPLASH_ACCESS_KEY = "WVvwLKxKfkfqO1Cbdaw5EuxDIgOL-F8pY1z6Sdya-Pg";
const UNSPLASH_URL = `https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_KEY}&per_page=5`;

const Image = () => {
  const [images, SetImages] = useState([]);
  const [currentIndex, SetCurrentIndex] = useState(0);

  const fetchdata = async () => {
    try {
      const responce = await fetch(UNSPLASH_URL);
      if (!responce) {
        throw new Error("Failed to fetch the data");
      }
      const data = await responce.json();
      SetImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handlePrevious = () => {
    SetCurrentIndex((x) => (x === 0 ? images.length - 1 : x - 1));
  };

  const handleNext = () => {
    SetCurrentIndex((x) => (x === images.length - 1 ? 0 : x + 1));
  };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      {images.length === 0 ? (
        "Loading"
      ) : (
        <img src={images[currentIndex].urls.thumb} alt="images" />
      )}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Image;
