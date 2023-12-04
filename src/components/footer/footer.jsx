import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";

function Footer() {
  const [alamat, setAlamat] = useState("");
  const [our, setOur] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const historyRef = ref(db, "Footer/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setAlamat(data.alamat);
      setOur(data.our);
    });
  }, []);
  return (
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-12">
                    <h4 className="site-footer-title mb-4">{our}</h4>
                </div>
                <div className="col-lg-4 col-md-6 col-11">
                    <div className="site-footer-thumb">
                    <strong className="mb-1"></strong>
                    <p></p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-11">
                    <div className="site-footer-thumb">
                    <strong className="mb-1">{alamat}</strong>
                    <p>C4M7+G85, Manembo-nembo Tengah, Matuari, Bitung City, North Sulawesi 95545</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-11">
                    <strong className="mb-1"></strong>
                    <p></p>
                </div>
                </div>
            </div>
            <div className="site-footer-bottom">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-12 mt-4">
                    <p className="copyright-text mb-0">Website.barbershop.moks 
                    </p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-3 mt-lg-4 ms-auto">
                    <a href="#section_1" className="back-top-icon smoothscroll" title="Back Top">
                        <i className="bi-arrow-up-circle" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
  );
}
export default Footer;
