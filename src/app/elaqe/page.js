/* eslint-disable */

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./elaqe.css"
import { AiOutlineArrowRight } from "react-icons/ai";


export default function Home() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Əlaqə</p>
     <div className="communication">
      <div className="communication_left" >
   <h1>Əlaqə məlumatları</h1>
   <p>Bakı, Azaro Plaza</p>
   <p>+9940000000</p>
   <p>guysgroup.az@gmail.com</p>
      </div>
      <div className="communication_right">
    <h1>Müraciət et</h1>
    <p>Müraciət et, biz özümüz əlaqə saxlayaq</p>
    <form>
      <input placeholder="Ad və Soyad"></input> <br/>
      <input placeholder="Mobil nömrə"></input> <br/>
      <input placeholder="Email"></input> <br/>
      <input placeholder="Mövzu başlığı qeyd et"></input>  <br/>
      <button>Göndər</button>
    </form>
      </div>
     </div>
     <Footer></Footer>
    </div>
    </>
  );
}