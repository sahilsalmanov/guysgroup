"use client"
/* eslint-disable */

import { useMemo, useState } from "react";
import data from '../data.json';
import "./pageid.css"
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import OnlySlider from "@/app/xeberler/OnlySlider";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function Home({params}) {
  let newsId = params.newsid
  let PageSize = 16;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  let news = currentTableData[newsId]

  return (
    <>
    <div className="container">
      
     <Header></Header>
     <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Xəbərlər <AiOutlineArrowRight /> {news.title} </p>
     <div className="news_section">
      <div className="news_section_left">
      <OnlySlider></OnlySlider>
          <h3>{news.date}</h3>
          <h1>{news.title}</h1>
          <p>{news.text}</p>
          <h4>Paylas</h4>
      </div>
      <div className="news_section_right">
     <h2>Digər xəbərlər</h2>
     {data.map((item) => ( 
    item.id != newsId && (
      <a key={item.id} href={'/xeberler/' + item.id}>
        <div className="other_news" key={item.id}>
        <p>{item.date}</p>
    <p>{item.title}</p>
    </div>
      </a>
    )
))}

<a href="/xeberler">  <button className="all_news">Bütün xeberler</button></a>
      </div>
    </div>
     <Footer></Footer>
     </div>
    </>
  );
}