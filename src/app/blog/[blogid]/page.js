"use client"
import { useMemo, useState } from "react";
import data from '../data.json';
import "./pageid.css"
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import OnlySlider from "../OnlySlider";


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
    
     <div className="blog_section">
      <div className="blog_section_left">
      <OnlySlider></OnlySlider>
          <h3>{blog.date}</h3>
          <h1>{blog.title}</h1>
          <p>{blog.text}</p>
          <h4>Paylas</h4>
      </div>
      <div className="blog_section_right">
     <h2>Diger xeberler</h2>
     {data.map((item) => (
    item.id != blogId && (
      <a key={item.id} href={'/blog/' + item.id}>
        <div className="other_blog" key={item.id}>
    <p>{item.title}</p>
    <p>{item.date}</p>
    </div>
      </a>
    )
))}

   <a href="/blog">  <button>Butun xeberler</button></a>
      </div>
    </div>
     <Footer></Footer>
     </div>
    </>
  );
}