"use client";
/* eslint-disable */

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./about.css"
import SliderAbout from "@/components/SliderAbout/SliderAbout";
import { AiOutlineArrowRight } from "react-icons/ai";



export default function Home() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Haqqımızda</p>
     <div className="about">
      <h1>Haqqımızda</h1>
     </div>
     <SliderAbout/>
     <div className="whous">
    <div className="whous_top">
    <h1>Biz kimik</h1>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio
     </p>
    </div>
    <div className ="whous_bottom">
    <div className="rectangle_about">
      <h1>Meqsedimiz</h1>
      <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio
     </p>
    </div>
    <div className="rectangle_about">
      <h1>Missiyamiz</h1>
      <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio
     </p>
    </div>
    </div>
     </div>
     <div className="why_guys">
     <div>
    <h1>Niyə GUYS Group?</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis
    </p>
     </div>
     <div>
      <img src="./orange.png"></img>
     </div> 
     </div>
     <div className="organizations">
     <h1>Təlim və tədbirlərdən</h1>
     <img src="collective.png"></img>
     </div>
     <Footer></Footer>
    </div>
    </>
  );
}