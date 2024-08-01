import React, { useEffect, useState } from "react";

const MorePhotoUrl = `https://jsonplaceholder.typicode.com/photos`;

const LoadMore = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [hasmore, setHasmore] = useState(true);
  const photosperpage = 10;
  const maxphoto = 50;

  const IntialPhotos = async () => {
    try {
      const response = await fetch(
        `${MorePhotoUrl}?_page={page}&limit={photosperpage}`
      );
      const data = await response.json();
      const copy = data.slice(0, photosperpage);
      setPhotos(copy);
    } catch (error) {
      console.log(error.message);
    }
  };

  const LoadMore = async () => {
    if (hasmore) {
      const NextPage = page + 1;

      try {
        const response2 = await fetch(
          `${MorePhotoUrl}?_page={NextPage}&limit={photosperpage}`
        );
        const data2 = await response2.json();
        const copy2 = data2.slice(0, photosperpage);

        setPhotos((previousPhoto) => [...photos, ...copy2]);
        setPage(NextPage);

        if (photos.length + copy2.length >= maxphoto) {
          setHasmore(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    IntialPhotos();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-2">
      {photos.map((images) => (
        <div>
          <img src={images.url} alt="images" />
          <p>{images.title}</p>
        </div>
      ))}
      <button onClick={LoadMore} className="bg-slate-600">
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
