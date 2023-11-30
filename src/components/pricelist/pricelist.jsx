import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";

function Pricelist() {
  const [haircut, setHaircut] = useState("");
  const [gimbal, setGimbal] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const historyRef = ref(db, "Pricelist/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setHaircut(data.haircut);
      setGimbal(data.gimbal);
    });
  }, []);
  return (
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
    <section className="price-list-section section-padding" id="section_4">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-12">
                <div className="price-list-thumb-wrap">
                <div className="mb-4">
                    <h2 className="mb-2">Price List</h2>
                    <strong>Starting at $25</strong>
                </div>
                <div className="price-list-thumb">
                    <h6 className="d-flex">
                    Haircut
                    <span className="price-list-thumb-divider" />
                    <strong>{haircut}</strong>
                    </h6>
                </div>
                <div className="price-list-thumb">
                    <h6 className="d-flex">
                    gimbal
                    <span className="price-list-thumb-divider" />
                    <strong>{gimbal}</strong>
                    </h6>
                </div>
                <div className="price-list-thumb">
                    <h6 className="d-flex">
                    skin cut
                    <span className="price-list-thumb-divider" />
                    <strong>Rp.10.000</strong>
                    </h6>
                </div>
                <div className="price-list-thumb">
                    <h6 className="d-flex">
                    Styling 
                    <span className="price-list-thumb-divider" />
                    <strong>Rp.30.000</strong>
                    </h6>
                </div>
                <div className="price-list-thumb">
                    <h6 className="d-flex">
                    Color
                    <span className="price-list-thumb-divider" />
                    <strong>Rp.50.000</strong>
                    </h6>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-12 custom-block-bg-overlay-wrap mt-5 mb-5 mb-lg-0 mt-lg-0 pt-3 pt-lg-0">
                <img src="images/styling.jpeg" className="custom-block-bg-overlay-image img-fluid" alt />
            </div>
            </div>
        </div>
    </section>
</div>
  );
}
export default Pricelist;