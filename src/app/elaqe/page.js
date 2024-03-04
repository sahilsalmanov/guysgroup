import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./elaqe.css"


export default function Home() {
  return (
    <>
    <div className="container">
    <Header></Header>
     <div className="communication">
      <div className="communication_left" >
   <h1>Elaqe melumatlari</h1>
   <p>Baki, Azaro Plaza</p>
   <p>+9940000000</p>
   <p>guysgroup.az@gmail.com</p>
      </div>
      <div className="communication_right">
    <h1>Muraciet et</h1>
    <p>Muraciet et, biz ozumuz elaqe saxlayaq</p>
    <form>
      <input placeholder="Ad ve Soyad"></input> <br/>
      <input placeholder="Mobil nomre"></input> <br/>
      <input placeholder="Email"></input> <br/>
      <input placeholder="Movzu basligi qeyd et"></input>  <br/>
      <button>Gonder</button>
    </form>
      </div>
     </div>
     <Footer></Footer>
    </div>
    </>
  );
}