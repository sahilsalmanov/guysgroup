"use client"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./services.css"
import { useState } from "react";




export default function Home() {

  const [activeIndex, setActiveIndex] = useState(2); // Başlangıçta Xaricde tehsil'i aktif yapmak için 2'ye ayarladık

  const handleClick = (index) => {
      setActiveIndex(index);
  };

  
  return ( 
    <>
     <div className="container">
     <Header></Header>
     <div className="sections">
   <div className="sections_panel">
   <ul>
            <li className={activeIndex === 0 ? 'active' : 'non_active'} onClick={() => handleClick(0)}>Dizayn</li>
            <li className={activeIndex === 1 ? 'active' : 'non_active'} onClick={() => handleClick(1)}>Maliyye ve muhasibatliq</li>
            <li className={activeIndex === 2 ? 'active' : 'non_active'} onClick={() => handleClick(2)}>Xaricde tehsil</li>
            <li className={activeIndex === 3 ? 'active' : 'non_active'} onClick={() => handleClick(3)}>IT</li>
            <li className={activeIndex === 4 ? 'active' : 'non_active'} onClick={() => handleClick(4)}>Techizat</li>
            <li className={activeIndex === 5 ? 'active' : 'non_active'} onClick={() => handleClick(5)}>Tedbirlerin teskili</li>
        </ul>
        <button>Muraciet et</button>
   </div>
   <div className="sections_info">
   {
                (() => {
                    if(activeIndex == 0) {
                            return (
                               <h1>Dizayn</h1>
                            )
                        } else if (activeIndex == 1) {
                            return (
                           <h1>Maliyye ve muhasibatliq</h1>
                            )
                        }
                        else if (activeIndex == 2) {
                          return (
                          <h1>Xaricde tehsil</h1>
                          )
                      }
                      else if (activeIndex == 3) {
                        return (
                       <h1>IT</h1>
                        )
                    }
                    else if (activeIndex == 4) {
                      return (
                     <h1>Techizat</h1>
                      )
                  }
                  else if (activeIndex == 5) {
                    return (
                    <h1>Tedbirlerin teskili</h1>
                    )
                } else {
                            return (
                                <p>Bye</p>
                            )
                        }
                })()  
            }  
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis enim eget sollicitudin finibus. Aliquam consequat, tortor sed mollis posuere, odio justo sagittis massa, sed eleifend enim diam eget erat. Sed et magna bibendum mauris lacinia facilisis sit amet id enim. Praesent enim felis, rhoncus eu lacinia vel, pellentesque nec odio. Donec accumsan massa dictum, convallis nisl quis, molestie libero. Donec id ante eu nisi rhoncus hendrerit in id turpis.</p>
   </div>
     </div>
     <Footer></Footer>
     </div>
    </>
  );
}