"use client"
/* eslint-disable */

import React, { useState, useMemo } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import data from './data.json';
import { Link } from "next/link";

let PageSize = 16;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
    <div className="news_section">
     {currentTableData.map((item, index) => {
            return (
              <a key={index} href= {"xeberler/" + index}> 
            <div key={index} className = "news_card">
              <img src={item.img}></img>
             <p>{item.date}</p>
             <p>{item.title}</p>
            </div>
            </a>
              
            );
          })}
          </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
