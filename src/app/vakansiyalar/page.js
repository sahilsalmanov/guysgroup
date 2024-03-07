"use client"
/* eslint-disable */

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./vakansiya.css"
import  Link  from "next/link";
import App from "./pages";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function Home() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Vakansiyalar  </p>
    <img src="vakansiya.png"></img>
    <h1>Vakansiyalar</h1>
    <App/>
     <Footer></Footer>
    </div>
    </>
  );
}