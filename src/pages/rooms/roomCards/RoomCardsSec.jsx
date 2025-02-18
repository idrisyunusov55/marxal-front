import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import styles from "./RoomCardsSec.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getRoomCardsThunk } from "../../../redux/redurces/roomCards";
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const MAX_GUESTS = 11;
const MAX_ROOMS = 2;

const RoomCardsSec = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [rooms, setRooms] = useState([{ id: 1, adults: 2, children: 0 }]);

  const getTotalGuests = () =>
    rooms.reduce((sum, room) => sum + room.adults + room.children, 0);

  const handleGuestChange = (roomId, type, value) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? {
              ...room,
              [type]: Math.max(
                type === "adults" ? 1 : 0,
                Math.min(room[type] + value, MAX_GUESTS - getTotalGuests())
              )
            }
          : room
      )
    );
  };

  const addRoom = () => {
    if (rooms.length < MAX_ROOMS) {
      setRooms([...rooms, { id: rooms.length + 1, adults: 1, children: 0 }]);
    }
  };

  const removeRoom = (roomId) => {
    if (rooms.length > 1) {
      setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomCardsThunk());
  }, [dispatch]);

  const room = useSelector((state) => state.room.room) || [];

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.datePickerContainer}>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              isClearable={true}
              placeholderText="Gəliş və gediş tarixi"
              className={styles.datePicker}
            />
          </div>
          <div className={styles.roomsContainer}>
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                className={styles.roomCard}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4 className={styles.roomTitle}>Nömrə {room.id}</h4>
                <div className={styles.counterContainer}>
                  <span>Böyüklər:</span>
                  <div className={styles.counter}>
                    <button onClick={() => handleGuestChange(room.id, "adults", -1)}>-</button>
                    <span>{room.adults}</span>
                    <button onClick={() => handleGuestChange(room.id, "adults", 1)}>+</button>
                  </div>
                </div>
                <div className={styles.counterContainer}>
                  <span>Uşaqlar:</span>
                  <div className={styles.counter}>
                    <button onClick={() => handleGuestChange(room.id, "children", -1)}>-</button>
                    <span>{room.children}</span>
                    <button onClick={() => handleGuestChange(room.id, "children", 1)}>+</button>
                  </div>
                </div>
                {rooms.length > 1 && (
                  <button className={styles.removeButton} onClick={() => removeRoom(room.id)}>
                    Sil
                  </button>
                )}
              </motion.div>
            ))}
            {rooms.length < MAX_ROOMS && (
              <motion.button
                className={styles.addRoomButton}
                onClick={addRoom}
                whileHover={{ scale: 1.05 }}
              >
                + Nömrə əlavə et
              </motion.button>
            )}
          </div>
        </div>
        <div className={styles.cards}>
          {room.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.firstPhoto} alt={item.name} />
              <div className={styles.info}>
                <h5>{item.name}</h5>
                <p>{item.maxPeople} qonaq</p>
                <p>{item.sahe}</p>
                <p>{item.otaqSayi} otaq</p>
                <p>{item.totalroom} nömrə qalıb</p>
                <p>{item.price} AZN </p>
                <button className={styles.addReservation}>Rezerv Et</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomCardsSec;
