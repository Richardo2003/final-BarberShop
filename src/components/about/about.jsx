import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "../../config/Firebase";
// import axios from "axios";

function About() {
  const [best, setBest] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const historyRef = ref(db, "about/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setBest(data.best);
    });
  }, []);
  return (
      <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
        <section className="about-section section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 mx-auto">
                <h2 className="mb-4">{best}</h2>
                <div className="border-bottom pb-3 mb-5">
                </div>
              </div>

              <h6 className="mb-5">Meet Babers</h6>
              <div className="col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-5 mb-lg-0">
                <img
                  src="images/barber/andre.jpg"
                  className="custom-block-bg-overlay-image img-fluid"
                  alt
                />
                <div className="team-info d-flex align-items-center flex-wrap">
                  <p className="mb-0">Andre</p>
                  <ul className="social-icon ms-auto">
                    <li className="social-icon-item">
                      <a
                        href="https://instagram.com/sultanm0_?igshid=OGQ5ZDc2ODk2ZA=="
                        className="social-icon-link bi-instagram"
                      ></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-whatsapp"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-12 custom-block-bg-overlay-wrap mt-4 mt-lg-0 mb-5 mb-lg-0">
                <img
                  src="images/barber/ekii.jpg"
                  className="custom-block-bg-overlay-image img-fluid"
                  alt
                />
                <div className="team-info d-flex align-items-center flex-wrap">
                  <p className="mb-0">Eki</p>
                  <ul className="social-icon ms-auto">
                    <li className="social-icon-item">
                      <a
                        href="https://instagram.com/reskysteven?igshid=OGQ5ZDc2ODk2ZA=="
                        className="social-icon-link bi-instagram"
                      ></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-whatsapp"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
export default About;