/* eslint-disable */
import React from 'react'
import "./Header.css"
import Link from 'next/link'
import Image from "next/image.js";
import { AiFillProfile } from "react-icons/ai";


const header = () => {
  return ( 
     
      <nav>
        <div className="nav_left">
  <img src="/./logo.png" alt="logo" />
        </div>
        <div className="nav_middle"> 
      <ul>
        <li>
        <Link className='nav_link' href="/">Ana səhifə</Link>
        </li>
        <li>
        <Link className='nav_link' href="/haqqimizda">Haqqımızda</Link>
        </li>
        <li>
        <Link className='nav_link' href="/telimlerimiz">Təlimlərimiz</Link>
        </li>
        <li>
        <Link className='nav_link' href="/xidmetlerimiz">Xidmətlərimiz</Link>
        </li>
        <li>
        <Link className='nav_link' href="/korporativ">Korporativ</Link>
        </li>
        <li>
        <Link className='nav_link' href="/blog">Blog</Link>
        </li>
        <li>
        <Link className='nav_link' href="/vakansiyalar">Vakansiyalar</Link>
        </li>
        <li>
        <Link className='nav_link' href="/xeberler">Xəbərlər</Link>
        </li>
        <li>
        <Link className='nav_link' href="/elaqe">Əlaqə</Link>
        </li>
      </ul> 
      <div class="dropdown">
    <button class="dropbtn"><AiFillProfile color='black' size ={30} />
    </button>
    <div class="dropdown-content">
      <a href="/haqqimizda">Haqqımızda</a>
      <a href="/telimlerimiz">Təlimlərimiz</a>
      <a href="/xidmetlerimiz">Xidmətlərimiz</a>
      <a href="/korporativ">Korporativ</a>
      <a href="/blog">Blog</a>
      <a href="/vakansiyalar">Vakansiyalar</a>
      <a href="/xeberler">Xəbərlər</a>
      <a href="/elaqe">Əlaqə</a>
    </div>
       </div> 
        </div>
        <div className="nav_end">
        <button>Müraciət et</button>  
        </div>
      </nav>

  )
}

export default header