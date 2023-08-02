import React from 'react';
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


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <div className="flex items-center justify-center mt-10 mb-16">
      <div className="w-1/2">
        <Slider {...settings}>
          {images.map((imageInfo, index) => (
            <div key={index} className="text-center">
              <h1 className="text-center font-bold text-2xl mb-4">{imageInfo.alt}</h1>
              <img src={imageInfo.url} alt={imageInfo.alt} className='shadow-xl'/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
