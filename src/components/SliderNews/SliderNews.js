import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <h1>Xəbərlər</h1>
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.photo} alt="" className="h-44 w-44 rounded-full"/>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.date}</p>
                <p className="text-center">{d.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <button>Bütün xəbərlər</button>
    </div>
  );
}

const data = [
  {
    photo: "./news.png",
    date: "22.05.2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    photo: "./news.png",
    date: "22.05.2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    photo: "./news.png",
    date: "22.05.2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    photo: "./news.png",
    date: "22.05.2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    photo: "./news.png",
    date: "22.05.2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    photo: "./news.png",
    date: "22.05.2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    photo: "./news.png",
    date: "22.05.2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];

export default SliderNews;
