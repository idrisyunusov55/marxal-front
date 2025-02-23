// src/pages/RoomCardsSec/RoomCardsSec.js
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import styles from "./RoomCardsSec.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getRoomCardsThunk, reserveRoomThunk } from "../../../redux/redurces/roomCards";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

const MAX_GUESTS = 11;
const MAX_ROOMS = 2;

const RoomCardsSec = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [rooms, setRooms] = useState([{ id: 1, adults: 2, children: 0 }]);
  const [totalPrice, setTotalPrice] = useState({});
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    dispatch(getRoomCardsThunk());
  }, [dispatch]);

  const allRooms = useSelector((state) => state.room.room) || [];
  const userId = useSelector((state) => state.auth.user?._id);

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
              ),
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

  const calculateTotalPrice = () => {
    if (startDate && endDate) {
      const diffDays = Math.ceil(
        Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24)
      );
      const newPrices = {};
  
      filteredRooms.forEach((room) => {
        let totalGuestsInAllRooms = getTotalGuests();
        if (room.maxPeople >= totalGuestsInAllRooms) {
          newPrices[room._id] = diffDays * room.price;
        }
      });
  
      setTotalPrice(newPrices);
    } else {
      setTotalPrice({});
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [startDate, endDate, filteredRooms]);

  useEffect(() => {
    const totalGuests = getTotalGuests();
    const filtered = allRooms.filter((room) => room.maxPeople >= totalGuests);
    setFilteredRooms(filtered);
  }, [rooms, allRooms]);

  const handleReservation = (roomId) => {
    if (!startDate || !endDate) {
      alert("Zəhmət olmasa tarix aralığı seçin.");
      return;
    }
  
    const reservationData = {
      userId,
      roomId,
      checkIn: startDate.toISOString().split("T")[0],  
      checkOut: endDate.toISOString().split("T")[0],  
      totalGuests: getTotalGuests(),
      totalPrice: totalPrice[roomId] || 0,
    };
  
    dispatch(reserveRoomThunk({ roomId, reservationData }))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/odenis", { state: reservationData });
        }
      })
      .catch((error) => {
        console.error("Rezervasiya uğursuz oldu:", error.response?.data || error.message);
        alert("Rezervasiya zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
      });
  };

  const handleDetailClick = (room) => {
    navigate("/detail", { state: { room } });
  };

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
          </div>
        </div>
        <div className={styles.cards}>
          {filteredRooms.map((item) => (
            <div key={item._id} className={styles.card}>
              <Carousel showThumbs={false} dynamicHeight={true}>
                <div><img src={item.firstPhoto} alt={item.name} /></div>
                <div><img src={item.secondPhoto} alt={item.name} /></div>
                <div><img src={item.thirdPhoto} alt={item.name} /></div>
              </Carousel>
              <div className={styles.info}>
                <h5>{item.name}</h5>
                <p>{item.maxPeople} qonaq</p>
                <p>{item.price} AZN / gecə</p>
                <p>Ümumi qiymət: {totalPrice[item._id] || 0} AZN</p>
                <button className={styles.addReservation} onClick={() => handleReservation(item._id)}>
                  Rezerv Et
                </button>
                <button className={styles.detailButton} onClick={() => handleDetailClick(item)}>
                  Ətraflı məlumat
                </button>
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