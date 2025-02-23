import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Detail.module.scss";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state?.room;

  if (!room) {
    return <div>Otaq məlumatı tapılmadı.</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.detailContainer}>
        <h1 className={styles.detailTitle}>{room.name}</h1>
        <div className={styles.detailContent}>
          <div className={styles.detailImages}>
            <img src={room.firstPhoto} alt={room.name} />
            <img src={room.secondPhoto} alt={room.name} />
          </div>
          <div className={styles.detailInfo}>
            <p><strong>Qonaq Sayı:</strong> {room.maxPeople}</p>
            <p><strong>Qiymət:</strong> {room.price} AZN / gecə</p>
            <p><strong>Təsvir:</strong> {room.description}</p>
          </div>
        </div>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Geri qayıt
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Detail;