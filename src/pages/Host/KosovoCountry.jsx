import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import styles from "./KosovoCountry.module.css";
import RootLayout from "../../layouts/RootLayout";
import img1 from "../../images/T2.jpg";
import img2 from "../../images/renderatPic2.jpg";
import img3 from "../../images/roadPic2.jpg";

export default function KosovCountry() {
  return (
    <div>
      <RootLayout />
      <div className={styles.div}>
        <h1>PROJECTS in Kosovo</h1>
        <div className={styles.container}>
          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link to="/project/projectRoads">
                <img src={img1} alt="Northern Winter Sky" />
                <div className={styles.content}>
                  <h1>dawd</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link to="/project/projectRenderat">
                <img src={img2} alt="Shining Stars " />
                <div className={styles.content}>
                  <h1>dawd</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link>
                <img src={img3} alt="A River Flowing " />
                <div className={styles.content}>
                  <h1>dawd</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link>
                <img
                  src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg"
                  alt="A Clean Mountain Lake"
                />
                <div className={styles.content}>
                  <h1>dawd</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link>
                <img
                  src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
                  alt="A Clean Mountain Lake"
                />
                <div className={styles.content}>
                  <h1>dawd</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link>
                <img
                  src="https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg"
                  alt="Shining Stars "
                />
                <div className={styles.content}>
                  <h1>dawd</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
