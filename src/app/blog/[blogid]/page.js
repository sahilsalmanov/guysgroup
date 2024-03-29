"use client"
/* eslint-disable */

import { useMemo, useState } from "react";
import data from '../data.json';
import "./pageid.css"
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import OnlySlider from "../OnlySlider";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function Home({params}) {
  let blogId = params.blogid
  let PageSize = 16;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  let blog = currentTableData[blogId]

  return (
    <>
    <div className="container">
      
     <Header></Header>
     <p className="routing_show">Ana səhifə <AiOutlineArrowRight /> Bloglar <AiOutlineArrowRight /> {blog.title} </p>
     <div className="blog_section">
      <div className="blog_section_left">
      <OnlySlider></OnlySlider>
          <h3>{blog.date}</h3>
          <h1>{blog.title}</h1>
          <p>{blog.text}</p>
          <h4>Paylas</h4>
      </div>
      <div className="blog_section_right">
     <h2>Maraqlı bloglar</h2>
     {data.map((item) => (
    item.id != blogId && (
      <a  key={item.id} href={'/blog/' + item.id}>
        <div className="other_blog" key={item.id}>
        <p>{item.date}</p>
    <p>{item.title}</p>
    </div>
      </a>
    )
))}

   <a href="/blog">  <button className="all_blogs">Bütün bloglar</button></a>
      </div>
    </div>
     <Footer></Footer>
     </div>
    </>
  );
}