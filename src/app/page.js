"use client";
/* eslint-disable */

import Footer from "@/components/Footer/Footer.jsx";
import React from 'react'
import Header from "../components/Header/Header.jsx";
import "./page.css"
import SliderNews from "../components/SliderNews/SliderNews.js";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Corporation from "@/components/Corporation/Corporation.js";

const page = () => {

    const initialData = [
        { content: "İçerik 1" },
        { content: "İçerik 2" },
        { content: "İçerik 3" },
        { content: "İçerik 4" },
        { content: "İçerik 5" },
        { content: "İçerik 6" },
        { content: "İçerik 7" },
        { content: "İçerik 8" },
        { content: "İçerik 9" },
        { content: "İçerik 10" }
      ];
    
      const initialData2 = [
        { content: "İçerik 1" },
        { content: "İçerik 2" },
        { content: "İçerik 3" },
        { content: "İçerik 4" }
      ];
      const initialData3 = [
        { content: "İçerik 5" },
        { content: "İçerik 6" },
        { content: "İçerik 7" },
      ];
    
      const initialData4 = [
        { content: "İçerik 8" },
        { content: "İçerik 9" },
        { content: "İçerik 10" }
      ];
    
      
      const [isOpenArray, setIsOpenArray] = useState(new Array(10).fill(false));
      const [chooseClassname, setchooseClassname] = useState(true)
      const [chooseClassname2, setchooseClassname2] = useState(0)
    
      const togglePanel = (index) => {
        const newArray = [...isOpenArray];
        newArray[index] = !newArray[index];
        setIsOpenArray(newArray);
      };
    
    
      function handleButtonClick() {
        setchooseClassname(!chooseClassname)
      }
    
      function handleButtonClick2() {
        setchooseClassname2(0)
      }
      function handleButtonClick3() {
        setchooseClassname2(1)
      }
      function handleButtonClick4() {
        setchooseClassname2(2)
      }
      function handleButtonClick5() {
        setchooseClassname2(3)
      }
    
  return (
    <>
    <div className="container">
    <Header></Header>
    <div className="about">
     <h3>Lorem ipsum dolor sit amy, consectetur</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-7LevsXbdx8?si=kqTI0IYIY-AWl2XC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className="training_container">
     <h1>Təlimlərimiz</h1>
     <button style={{width: '100px'}} onClick={handleButtonClick } className={chooseClassname ? 'active_btn' : 'btn_left' }>Təlim</button>
     <button style={{width: '206px'}} onClick={handleButtonClick} className= {!chooseClassname ? 'active_btn' : 'btn_right' }>Korporativ təlimlər</button>
     <div className="trainings">
     {chooseClassname ? 
     <>
      <a  href="/telimlerimiz"> <div className="train">
      <img src="./telim1.png"></img>
      <h3>IT Təlimləri</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
      </div></a>
      <a href="/telimlerimiz"> <div className="train">
      <img src="./telim2.png"></img>
      <h3>Mühasibatlıq təlimləri</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
      </div></a>
      <a  href="/telimlerimiz"> <div className="train">
      <img src="./telim3.png"></img>
      <h3>İngilis dili təlimləri</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
      </div></a>
      <a href="/telimlerimiz"> <div className="train">
      <img src="./telim4.png"></img>
      <h3>Psixologiya təlimləri</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
      </div></a>
      <a href="/telimlerimiz"> <div className="train">
      <img src="./telim5.png"></img>
      <h3>Nitq təlimləri</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
      </div></a>
      <a href="/telimlerimiz"> <div className="train">
      <img src="./telim6.png"></img>
      <h3>Biznes təlimləri</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
      </div></a> 
     </> : 
     <>
     <a  href="/telimlerimiz"> <div className="train">
       <img src="./telim4.png"></img>
       <h3>İlkin İT Təlimləri</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div></a>
       <a  href="/telimlerimiz"> <div className="train">
       <img src="./telim5.png"></img>
       <h3>SƏTƏM Təlimləri</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div></a>
       <a  href="/telimlerimiz"> <div className="train">
       <img src="./telim6.png"></img>
       <h3>Layihələrin idarəedilməsi Təlimləri</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div></a> 
     </>
     }
     
     </div>
    </div>
    <div className="services">
      <div className="left_services">
        <h1>
          Xidmətlərimiz
        </h1>
        <p>
        Biz 17 təsisatı özündə birləşdirən xidmətlər zənciriyik. A-dan - Z-yə bir çox xidmətləri sizlərə təqdim etməyə resursumuz, təcrübəmiz və ən əsası kifayət qədər peşəkar kadr bazamız mövcuddur. Fəaliyyətimiz birbaşa xidmət və tədris olaraq 2 yerə bölünür.
        </p>
       <a href="/xidmetlerimiz"> <button>Daha ətraflı <img src="./arrow.png"></img></button></a>
      </div>
      <div className="right_services">
       <a href="/xidmetlerimiz">
       <div className="services_each">
       <div className="service_container"> 
       <div className="service_each_header">
        <img width={44} height={44} src="./service1.png"></img>
       <h3> Maliyyə və mühasibatlıq</h3>
        </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div>
       </div>
       </a>
       <a href="/xidmmetlerimiz"><div className="services_each">
       <div className="service_container"> 
       <div className="service_each_header">
        <img width={44} height={44} src="./service2.png"></img>
       <h3> Tədbirlərin təşkili</h3>
        </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div>
       </div></a>
      <a href="/xidmetlerimiz">
      <div className="services_each">
       <div className="service_container"> 
       <div className="service_each_header">
        <img width={44} height={44} src="./service3.png"></img>
       <h3> Xaricdə təhsil</h3>
        </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div>
       </div>
      </a>
      <a href="/xidmetlerimiz">
      <div className="services_each">
       <div className="service_container"> 
       <div className="service_each_header">
        <img width={44} height={44} src="./service4.png"></img>
       <h3> Təchizat</h3>
        </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div>
       </div>
      </a>
      <a href="/xidmetlerimiz">
      <div className="services_each">
       <div className="service_container"> 
       <div className="service_each_header">
        <img width={44} height={44} src="./service5.png"></img>
       <h3>IT</h3>
        </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div>
       </div>
      </a>
     <a href="xidmetlerimiz">
     <div className="services_each">
       <div className="service_container"> 
       <div className="service_each_header">
        <img width={44} height={44} src="./service6.png"></img>
       <h3>Dizayn</h3>
        </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque....</p>
       </div>
       </div>
     </a>
      </div>
    </div>
    <div className="subscribe">
      <div className="subscribe_left">
      <img src="./saly.png"></img>
      </div>
      <div className="subscribe_right">
        <div className="subscribe_right_top">
        <h3>Təlim və xidmətlərimizlə bağlı yeniliklərdən ilk sən xəbərdar ol!</h3>
        </div>
       <div className="subscribe_right_bottom">
       <input placeholder="Email"></input>
        <button>Abonə ol</button>
       </div>
      </div>
    </div>
    <h1>Xəbərlər</h1>
    <SliderNews/>
    <div className="videonews">
    <div className="videonews_container">
    <div className="video_left">
     <h1>Video Dərslər</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend neque.</p>
     <button>Dərslərə başla</button>
    </div>
    <div className="video_right">
   <img src="./examplephoto.png"></img>
    </div>

    </div>
    </div>
    <div className="question">
    <div className="question_top">
    <h1>Tez-tez verilən suallar</h1>
    <button style={{width: '112px'}} onClick={handleButtonClick2 } className={chooseClassname2 == 0 ? 'active_btn_question' : 'question_btn1' }>Hamısı</button>
     <button style={{width: '121px'}} onClick={handleButtonClick3} className= {chooseClassname2 == 1  ? 'active_btn_question' : 'question_btn2' }>Təlimlər</button>
     <button style={{width: '135px'}} onClick={handleButtonClick4} className= {chooseClassname2 == 2  ? 'active_btn_question' : 'question_btn3' }>Xidmətlər</button>
     <button style={{width: '206px'}} onClick={handleButtonClick5} className= {chooseClassname2 == 3  ? 'active_btn_question' : 'question_btn4' }>Korporativ təlimlər</button>
    </div>
    </div>
  
    <div className="questions">
  {chooseClassname2 === 0 &&
    initialData.map((item, index) => (
      <div key={index}>
        <div className="hidden" onClick={() => togglePanel(index)} style={{ cursor: 'pointer' }}>
          <p className="hidden_text">{item.content}</p>
          <p className="hidden_icon"><AiFillCaretDown /></p>
        </div>
        {isOpenArray[index] && (
          <div style={{ marginTop: '5px', border: '1px solid black', padding: '10px', marginBottom:"10px", borderRadius:'8px' }}>
            {item.content}
          </div>
        )}
      </div>
    ))}

{chooseClassname2 === 1 &&
    initialData2.map((item, index) => (
      <div key={index}>
      <div className="hidden" onClick={() => togglePanel(index)} style={{ cursor: 'pointer' }}>
        <p className="hidden_text">{item.content}</p>
        <p className="hidden_icon"><AiFillCaretDown /></p>
      </div>
      {isOpenArray[index] && (
        <div style={{ marginTop: '5px', border: '1px solid black', padding: '10px', marginBottom:"10px", borderRadius:'8px' }}>
          {item.content}
        </div>
      )}
    </div>
    ))}

{chooseClassname2 === 2 &&
    initialData3.map((item, index) => (
      <div key={index}>
      <div className="hidden" onClick={() => togglePanel(index)} style={{ cursor: 'pointer' }}>
        <p className="hidden_text">{item.content}</p>
        <p className="hidden_icon"><AiFillCaretDown /></p>
      </div>
      {isOpenArray[index] && (
        <div style={{ marginTop: '5px', border: '1px solid black', padding: '10px', marginBottom:"10px", borderRadius:'8px' }}>
          {item.content}
        </div>
      )}
    </div>
    ))}

{chooseClassname2 === 3 &&
    initialData4.map((item, index) => (
      <div key={index}>
        <div className="hidden" onClick={() => togglePanel(index)} style={{ cursor: 'pointer' }}>
          <p className="hidden_text">{item.content}</p>
          <p className="hidden_icon"><AiFillCaretDown /></p>
        </div>
        {isOpenArray[index] && (
          <div style={{ marginTop: '5px', border: '1px solid black', padding: '10px', marginBottom:"10px", borderRadius:'8px' }}>
            {item.content}
          </div>
        )}
      </div>
    ))}
</div>
    <h1>Tərəfdaşlıq</h1>
    <Corporation/>
    <Footer></Footer>
    </div>
     
    </>
  )
}

export default page