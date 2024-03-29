/* eslint-disable */

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Corporation.css';
import data from '../../app/corporation/data.json'

function Corporation() {

  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button style={{backgroundColor:'black'}} className="slick-prev" onClick={onClick}>
        Previous
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button style={{backgroundColor:'black'}}  className="slick-next" onClick={onClick}>
        Next
      </button>
    );
  }

  return (
    <div className="news">
      <div className='w-3/4 m-auto'>
        <div className="mt-20">
          <Slider ref={slider} {...settings}>
            {data.map((d) => (
              <a key={d.title} href='/xeberler'>
                <div  key={d.title} className="slider_container">
                <div className='slider_image'>
                  <img src={d.img}  className="h-44 w-44 rounded-full"/>
                </div>

                <div className="slider_text">
                  <p className="text-xl font-semibold">{d.date}</p>
                  <p className="text-center">{d.title}</p>
                </div>
              </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}



export default Corporation;
