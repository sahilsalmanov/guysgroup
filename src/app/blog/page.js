"use client"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./blog.css"
import  Link  from "next/link";
import App from "./pages";


export default function Home() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <h1>Blog</h1>
    <App/>
     <Footer></Footer>
    </div>
    </>
  );
}