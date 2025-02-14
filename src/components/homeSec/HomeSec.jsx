import React from "react";
import styles from "./HomeSec.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const HomeSec = () => {
  return (
    <div className={styles.container}>
      <div id="homeCarousel" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item active ${styles.carouselItem}`}>
            <img
              src="https://www.marxalresort.az/assets/images/marxal-2000x1355.jpg"
              className={`d-block w-100 ${styles.image}`}
              alt="Slide 1"
            />
            <div className={`carousel-caption d-none d-sm-block ${styles.caption}`}>
            
            </div>
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img
              src="https://www.marxalresort.az/assets/images/img-2719-hdr-3-1280x851.jpg"
              className={`d-block w-100 ${styles.image}`}
              alt="Slide 2"
            />
            <div className={`carousel-caption d-none d-sm-block ${styles.caption}`}>

            </div>
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img
              src="https://www.marxalresort.az/assets/images/img-2697-edit-2000x1297.jpg"
              className={`d-block w-100 ${styles.image}`}
              alt="Slide 3"
            />
            <div className={`carousel-caption d-none d-sm-block ${styles.caption}`}>
          
            </div>
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img
              src="https://www.marxalresort.az/assets/images/img-2612-2000x1333.jpg"
              className={`d-block w-100 ${styles.image}`}
              alt="Slide 4"
            />
            <div className={`carousel-caption d-none d-sm-block ${styles.caption}`}>
              
            </div>
          </div>
        </div>
        <button className={`carousel-control-prev ${styles.control}`} type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className={`carousel-control-next ${styles.control}`} type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default HomeSec;
