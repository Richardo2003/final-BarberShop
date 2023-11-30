import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";

function Feature() {
  const [diskon, setDiskon] = useState("");
  const [promo, setPromo] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const historyRef = ref(db, "feature/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setDiskon(data.diskon);
      setPromo(data.promo);
    });
  }, []);
  return (
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
       <section className="featured-section section-padding">
            <div className="section-overlay" />
            <div className="container">
                <div className="row">
                <div className="col-lg-10 col-12 mx-auto">
                    <h2 className="mb-3">{diskon}</h2>
                    <p>on every second week of the month</p>
                    <strong>{promo}</strong>
                </div>
                </div>
            </div>
        </section>
    </div>
  );
}
export default Feature;





