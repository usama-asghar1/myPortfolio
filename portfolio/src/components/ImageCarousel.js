import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  const ImageCarousel = ({ images }) => {
    const [enlargedImage, setEnlargedImage] = useState(null);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    useEffect(() => {
      const bodyOverflow = enlargedImage ? 'hidden' : 'auto';
      document.body.style.overflow = bodyOverflow;
  
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [enlargedImage]);

    const enlargeImage = (url) => {
      setEnlargedImage(url);
    };
  
    const handleClose = () => {
      setEnlargedImage(null);
    };
  
    return (
      <div className="flex items-center justify-center mt-10 mb-16">
        <div className="w-1/2">
          <Slider {...settings}>
            {images.map((imageInfo, index) => (
              <div key={index} className="text-center">
                <h1 className="text-center font-bold text-2xl mb-4">{imageInfo.alt}</h1>
                <img src={imageInfo.url} alt={imageInfo.alt} className='shadow-xl' onClick={() => enlargeImage(imageInfo.url)} />
              </div>
            ))}
          </Slider>
        </div>
        {enlargedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-3/4 relative">
            <img src={enlargedImage} alt="Enlarged" className="w-full h-auto max-h-96" />
            <button className="absolute top-2 right-2 text-red-500 bg-white border border-red-500 px-3 py-1 rounded-lg" onClick={handleClose}>
              CLOSE
            </button>
          </div>
        </div>
      )}

      </div>
    );
  };
  
  
export default ImageCarousel;
