import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserReservationsThunk, cancelReservationThunk } from "../../redux/redurces/roomCards"; 
import Layout from "../../components/layout/Layout";
import styles from './Odenis.module.scss' 
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Odenis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const reduxReservations = useSelector((state) => state.room.userReservations);

  const reservations = location.state?.reservations || reduxReservations;

  useEffect(() => {
    if (!location.state?.reservations && user?._id) {
      dispatch(getUserReservationsThunk(user._id));
    }
  }, [dispatch, user, location.state]);


  const handleCancelReservation = (reservationId) => {
    if (window.confirm("Rezervasiyanı ləğv etmək istədiyinizə əminsinizmi?")) {
      dispatch(cancelReservationThunk(reservationId))
        .then(() => {
          alert("Rezervasiya uğurla ləğv edildi.");
          dispatch(getUserReservationsThunk(user._id)); 
        })
        .catch((error) => {
          console.error("Rezervasiya ləğvi uğursuz oldu:", error);
          alert("Rezervasiya ləğvi zamanı xəta baş verdi.");
        });
    }
  };


  const handleConfirmReservation = (reservationId) => {
    alert(`Rezervasiya ${reservationId} uğurla təsdiqləndi.`);
 
  };

  return (
    <>
    <Header/>
    <div className={styles.odenisContainer}>
        <h1 className={styles.odenisTitle}>Ödəniş Səhifəsi</h1>
        {reservations.length > 0 ? (
          <ul className={styles.reservationsList}>
            {reservations.map((room) => (
              <li key={room._id} className={styles.reservationItem}>
                <h3 className={styles.roomName}>{room.name}</h3>
                <p className={styles.roomPrice}>Qiymət: {room.totalPrice} AZN</p>
                <p className={styles.roomDate}>Giriş Tarixi: {room.checkIn}</p>
                <p className={styles.roomDate}>Çıxış Tarixi: {room.checkOut}</p>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.cancelButton}
                    onClick={() => handleCancelReservation(room._id)}
                  >
                    Ləğv et
                  </button>
                  <button
                    className={styles.confirmButton}
                    onClick={() => handleConfirmReservation(room._id)}
                  >
                    Təsdiq et
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noReservations}>Hazırda rezerv etdiyiniz otaq yoxdur.</p>
        )}
      </div>
    <Footer/>
    </>

  );
};

export default Odenis;