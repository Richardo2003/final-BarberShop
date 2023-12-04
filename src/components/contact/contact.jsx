import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "../../config/Firebase";
// import axios from "axios";

function Contact() {
  const [hello, setHello] = useState("");
  const [kontak, setKontak] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const historyRef = ref(db, "Contact/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setHello(data.hello);
      setKontak(data.kontak);
    });
  }, []);
  return (
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
    <section className="contact-section" id="section_5">
        <div className="section-padding section-bg">
            <div className="container">
            <div className="row">   
                <div className="col-lg-8 col-12 mx-auto">
                <h2 className="text-center">{hello}</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="section-padding">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                <h5 className="mb-3"><strong>{kontak}</strong></h5>
                <p className="text-white d-flex mb-1">
                    <a href="tel:852-9869-0658" className="site-footer-link">
                    (+62) 
                    852-9869-0658
                    </a>
                </p>
                <p className="text-white d-flex">
                    <a href="mailto:info@yourgmail.com" className="site-footer-link">
                    moks.hairstudio
                    </a>
                </p>
                <ul className="social-icon">
                    <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-facebook">
                    </a>
                    </li>
                    <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-twitter">
                    </a>
                    </li>
                    <li className="social-icon-item">
                    <a href="https://instagram.com/moks_hairstudio?igshid=OGQ5ZDc2ODk2ZA==" className="social-icon-link bi-instagram">
                    </a>
                    </li>
                    <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-youtube">
                    </a>
                    </li>
                    <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-whatsapp">
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-5 col-12 contact-block-wrap mt-5 mt-lg-0 pt-4 pt-lg-0 mx-auto">
                <div className="contact-block">
                    <h6 className="mb-0">
                    <i className="custom-icon bi-shop me-3" />
                    <strong>Open Daily.</strong>
                    <span className="ms-auto">12:00 AM - 22:00 PM</span>
                    </h6>
                </div>
                </div>
                <div className="col-lg-12 col-12 mx-auto mt-5 pt-5">
                <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.56911306727!2d125.11085577348958!3d1.4338035613033355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328705b46cd98a1f%3A0x19a58fb00fdb05a2!2sMOKS%20HAIRSTUDIO!5e0!3m2!1sen!2sid!4v1700840807614!5m2!1sen!2sid"  width="100%" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            </div>
        </div>
    </section>
</div>
  );
}
export default Contact;


