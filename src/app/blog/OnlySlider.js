/* eslint-disable */

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json"

function SliderNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button style={{backgroundColor:'red'}} className="slick-prev" onClick={onClick}>
        Previous
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button style={{backgroundColor:'red'}}  className="slick-next" onClick={onClick}>
        Next
      </button>
    );
  }

  return (
    <div className="news">
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={"/" + d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}



export default SliderNews;
