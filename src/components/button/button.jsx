import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "../../config/Firebase";
// import axios from "axios";

function Button() {
  const [judul, setJudul] = useState("");
  const [quotes, setQuotes] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const historyRef = ref(db, "Button/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setJudul(data.judul);
      setQuotes(data.quotes);
    });
  }, []);
  return (
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
    <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
    <div className="container">
    <div className="row">
        <div className="col-lg-8 col-12">

        <h1 className="text-white mb-lg-3 mb-4"><strong>{judul}</strong></h1>
        <p className="text-black">{quotes}</p>

        <br />
        <a className="btn custom-btn custom-border-btn custom-btn-bg-white smoothscroll me-2 mb-2" href="#section_2">Hairdressers</a>
        <a className="btn custom-btn smoothscroll mb-2" href="#section_3">What we do</a>
        </div>
    </div>
    </div>
    <div className="custom-block d-lg-flex flex-column justify-content-center align-items-center">
    <img src="images/kursi.jpeg" className="custom-block-image img-fluid" alt />
    <h4><strong className="text-white">Hurry Up! Get good haircut.</strong></h4>
    {/* <a href="#booking-section" className="smoothscroll btn custom-btn custom-btn-italic mt-3"></a> */}
    </div>
    </section>
</div>
  );
}
export default Button;

