
import React from 'react'
import "./Header.css"
import Link from 'next/link'

const header = () => {
  return (
     
      <nav>
        <div className="nav_left">
  <img src="/./logo.png" alt="" />
        </div>
        <div className="nav_middle">
      <ul>
        <li>
        <Link href="/">Ana sehife</Link>
        </li>
        <li>
        <Link href="/haqqimizda">Haqqimizda</Link>
        </li>
        <li>
        <Link href="/telimlerimiz">Telimlerimiz</Link>
        </li>
        <li>
        <Link href="/xidmetlerimiz">XIdmetlerimiz</Link>
        </li>
        <li>
        <Link href="/korporativ">Korporativ</Link>
        </li>
        <li>
        <Link href="/blog">Blog</Link>
        </li>
        <li>
        <Link href="/vakansiyalar">Vakansiyalar</Link>
        </li>
        <li>
        <Link href="/xeberler">Xeberler</Link>
        </li>
        <li>
        <Link href="/elaqe">Elaqe</Link>
        </li>
      </ul>
        </div>
        <div className="nav_end">
        <button>Müraciət et</button>
        </div>
      </nav>

  )
}

export default header