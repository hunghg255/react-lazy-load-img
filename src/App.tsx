import React, { useEffect, useState } from 'react';

import LazyLoadImage from './components/LazyLoadImage'

function App() {
  const [listImage, setListImage] = useState([]);
  useEffect(() => {
    const fetchImg = async () => {
      let listImg = await fetch('https://picsum.photos/v2/list').then(res => res.json());
      setListImage(listImg);
    }

    fetchImg();
  }, []);

  return (
      <div className="App">
          <div className="scroll">
            <h1>Lazyload image</h1>
          </div>
          <div className="img">
            {listImage.map((img: any, index) => (
              <div key={index} className="box">
                <LazyLoadImage
                  src={img.download_url as string}
                  alt={img.author}
                />
              </div>
              ))}
          </div>
      </div>
  );
}

export default App;
