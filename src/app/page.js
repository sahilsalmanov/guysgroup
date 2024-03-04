"use client";
import Footer from "@/components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import "./page.css"
import SliderNews from "../components/SliderNews/SliderNews.js";
import { useState } from "react";


export default function Home() {

  const [isOpenArray, setIsOpenArray] = useState(new Array(10).fill(false));

  const togglePanel = (index) => {
    const newArray = [...isOpenArray];
    newArray[index] = !newArray[index];
    setIsOpenArray(newArray);
  };



  return (
    <>
    <div className="container">
    <Header></Header>
    <div className="about">
      <h1>lorem10</h1>
      <p>dsjb</p>
      <img src="./logo.png"></img>
    </div>
    <div className="training_container">
     <h1>Təlimlərimiz</h1>
     <button>Təlim</button>
     <button>Korporativ təlimlər</button>
     <div className="trainings">
      <div className="train">Salam</div>
      <div className="train">Salam</div>
      <div className="train">Salam</div>
      <div className="train">Salam</div>
      <div className="train">Salam</div>
      <div className="train">Salam</div>
     </div>
    </div>
    <div className="services">
      <div className="left_services">
        <h1>
          Xidmətlərimiz
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque. Quisque cursus, eros id convallis laoreet, sapien lacus tristique dui, eget dignissim diam erat quis dui. Morbi non odio ipsum.
        </p>
        <button>Daha ətraflı</button>
      </div>
      <div className="right_services">
       <div className="services_each">Salam</div>
       <div className="services_each">Salam</div>
       <div className="services_each">Salam</div>
       <div className="services_each">Salam</div>
       <div className="services_each">Salam</div>
       <div className="services_each">Salam</div>
      </div>
    </div>
    <div className="subscribe">
      <div className="subscribe_left">
      <img src="./saly.png"></img>
      </div>
      <div className="subscribe_right">
        <h3>Təlim və xidmətlərimizlə bağlı yeniliklərdən ilk sən xəbərdar ol!</h3>
        <input placeholder="Email"></input>
        <button>Abonə ol</button>
      </div>
    </div>
    <SliderNews/>
    <div className="videonews">
    <div className="video_left">
     <h1>Video Dərslər</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque.</p>
     <button>Dərslərə başla</button>
    </div>
    <div className="video_right">
   <img src="./examplephoto.png"></img>
   <img src="./stickers.png"></img>
   <img src="./circle.png"></img>
   <img className="ornament" src="./ornament.jpg"></img>
    </div>
    </div>
    <div className="question">
    <h1>Tez-tez verilən suallar</h1>
    <button>Hamısı</button>
    <button>Təlimlər</button>
    <button>Xidmətlər</button>
    <button>Korporativ təlimlər</button>
    </div>
  
    <div className="questions">
      {isOpenArray.map((isOpen, index) => (
        <div key={index}>
          <div className="hidden" onClick={() => togglePanel(index)} style={{ cursor: 'pointer' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit? </p>
            <p>^</p>
          </div>
          {isOpen && (
            <div style={{ marginTop: '10px', border: '1px solid black', padding: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </div>
          )}
        </div>
      ))}
    </div>
    <SliderNews/>
    <Footer></Footer>
    </div>
     
    </>
  );
}
