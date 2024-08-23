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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Previous
        </button>
        {images.length === 0 ? (
          <span className="text-gray-500">Loading...</span>
        ) : (
          <img
            src={images[currentIndex].urls.thumb}
            alt="images"
            className="w-64 h-64 object-cover rounded-md shadow-lg"
          />
        )}
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Image;
