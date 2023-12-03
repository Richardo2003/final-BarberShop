import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";

function Service() {
  const [skin, setSkin] = useState("");
  const [styling, setStyling] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const historyRef = ref(db, "service/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setSkin(data.skin);
      setStyling(data.styling);
    });
  }, []);
  return (
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
    <section className="services-section section-padding" id="section_3">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-12">
                <h2 className="mb-5">Services</h2>
            </div>
            <div className="col-lg-6 col-12 mb-4">
                <div className="services-thumb">
                <img src="images/haircut.jpeg" className="services-image img-fluid" alt />
                <div className="services-info d-flex align-items-end">
                    <h4 className="mb-0">Hair cut</h4>
                    <strong className="services-thumb-price">Rp.40.000</strong>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
                <div className="services-thumb">
                <img src="images/skin.jpeg" className="services-image img-fluid" alt />
                <div className="services-info d-flex align-items-end">
                    <h4 className="mb-0">skin</h4>
                    <strong className="services-thumb-price">{skin}</strong>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                <div className="services-thumb">
                <img src="images/styling.jpeg" className="services-image img-fluid" alt />
                <div className="services-info d-flex align-items-end">
                    <h4 className="mb-0">styling</h4>
                    <strong className="services-thumb-price">{styling}</strong>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="services-thumb">
                <img src="images/gimbal.jpeg" className="services-image img-fluid" alt />
                <div className="services-info d-flex align-items-end">
                    <h4 className="mb-0">gimbal</h4>
                    <strong className="services-thumb-price">Rp.150.000</strong>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</div>
  );
}
export default Service;
