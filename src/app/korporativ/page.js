"use client"
/* eslint-disable */

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./corporativ.css"
import { useState } from "react";




export default function Home() {

  const [activeIndex, setActiveIndex] = useState(2); // Başlangıçta Xaricde tehsil'i aktif yapmak için 2'ye ayarladık

  const handleClick = (index) => {
      setActiveIndex(index);
  };

  
  return ( 
    <>
     <div className="container">
     <Header></Header>
     <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Korporativ</p>
     <div className="sections">
   <div className="sections_panel">
   <div className="section_ul">
            <p className={activeIndex === 0 ? 'active' : 'non_active'} onClick={() => handleClick(0)}><img src="./Letter.png"></img> SƏTƏM</p>
            <p className={activeIndex === 1 ? 'active' : 'non_active'} onClick={() => handleClick(1)}><img src="./Global.png"></img> İngilis dili</p>
            <p className={activeIndex === 2 ? 'active' : 'non_active'} onClick={() => handleClick(2)}><img src="./Screencast .png"></img> İlkin İT</p>
            <p className={activeIndex === 3 ? 'active' : 'non_active'} onClick={() => handleClick(3)}><img src="./psixo.png"></img> Layihələrin yazılması</p>
        </div>
        <button>Müraciət et</button>
   </div>
   <div className="sections_info">
   {
                (() => {
                    if(activeIndex == 0) {
                            return (
                               <h1>SƏTƏM</h1>
                            )
                        } else if (activeIndex == 1) {
                            return (
                           <h1>İngilis dili</h1>
                            )
                        }
                        else if (activeIndex == 2) {
                          return (
                          <h1>İlkin İT</h1>
                          )
                      }
                      else if (activeIndex == 3) {
                        return (
                       <h1>Layihələrin yazılması</h1>
                        )
                    }
                          else {
                            return (
                                <p>Bye</p>
                            )
                        }
                })()  
            }  
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis.</p>
      <h2>Tədris forması</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis.
      </p>
      <button className="plan_tedris">Tədris planını yüklə</button>
      <h2>Təlimçilər</h2>
     <div className="telimciler">
 <div className="telimci">
  <img src="logo.png"></img>
  <h5>Filolog</h5>
  <p>Nagi Nagiyev</p>
 </div>
 <div className="telimci">
  <img src="logo.png"></img>
  <h5>Filolog</h5>
  <p>Nagi Nagiyev</p>
 </div>
 <div className="telimci">
  <img src="logo.png"></img>
  <h5>Filolog</h5>
  <p>Nagi Nagiyev</p>
 </div>
     </div>
   </div>
     </div>
     <Footer></Footer>
     </div>
    </>
  );
}