import React, { useState, useEffect } from 'react';
import "../styles/Banner1.css"

const images = [
    "assets/B2.jpg",
    "assets/B1.jpg",
    "assets/B5.jpg",
    "assets/B4.jpg",
    "assets/B3.jpg",
    "assets/B6.jpg",
    "assets/B7.jpg",
    "assets/B8.jpg",
    "assets/B9.jpg",
    "assets/B10.jpg"
  ];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${images[index]})`,
        height: '600px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'brightness(0.65)'
      }}
    >
        <div className="banner">
            <div className="banner__title">
                <div className="banner__title_head">
                    <img className="banner1_logo_image" src={`${process.env.PUBLIC_URL + '/assets/LOGO.png'}`} alt="Logo" style={{filter: 'brightness(1.5)', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.8))'}} /><br></br>
                    AGRO<font  style={{filter: 'brightness(1.3)'}}>MATICS</font>
                </div>
                <div className="banner__title_tail"  style={{filter: 'brightness(1.5)'}}>
                    <div className="typing">Web based Crop Prediction and Fertilizer Recommendation Application</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
