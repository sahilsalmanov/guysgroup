"use client"
/* eslint-disable */

import { useMemo, useState } from "react";
import data from '../data.json';
import "./pageid.css"
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { AiOutlineArrowRight } from "react-icons/ai";
import OnlySlider from "../OnlySlider";


export default function Home({params}) {
  let vakansiyaId = params.vakansiyaid
  let PageSize = 16;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  let vakansiya = currentTableData[vakansiyaId]

  return (
    <>
    <div className="container">
      
     <Header></Header>
     <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Vakansiyalar <AiOutlineArrowRight /> {vakansiya.title} </p>
     <div className="vakansiya_section">
      <div className="vakansiya_section_left">
          <h1>{vakansiya.title}</h1>
          <p>{vakansiya.text}</p>
      </div>
      <div className="vakansiya_section_right">
    <h2>Komandamiza qosulmaga hazirsan?</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuer</p>
    <button>Emaili gonder</button>
      </div>
    </div>
     <Footer></Footer>
     </div>
    </>
  );
}