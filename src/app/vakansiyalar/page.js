"use client"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./vakansiya.css"
import  Link  from "next/link";
import App from "./pages";


export default function Home() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <img src="vakansiya.png"></img>
    <h1>Vakansiyalar</h1>
    <App/>
     <Footer></Footer>
    </div>
    </>
  );
}