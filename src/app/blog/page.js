"use client"
/* eslint-disable */

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./blog.css"
import  Link  from "next/link";
import App from "./pages";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function Home() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Bloglar</p>
    <h1>Blog</h1>
    <App/>
     <Footer></Footer>
    </div>
    </>
  );
}