import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRoomCardsThunk,
  getRoomCardsThunk,
  postRoomCardsThunk,
} from "../../redux/redurces/roomCards";
import styles from './AdminPanel.module.scss';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AdminPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomCardsThunk());
  }, [dispatch]);

  const room = useSelector((state) => state.room.room) || [];

  const formik = useFormik({
    initialValues: {
      name: "",
      firstPhoto: "",
      secondPhoto: "",
      thirdPhoto: "",
      maxPeople: "",
      sahe: "",
      otaqSayi: "",
      price: "",
      roominformation: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values,null,2));
      dispatch(postRoomCardsThunk(values))
    },
  });

  const deleteItem = (id) => {
    dispatch(deleteRoomCardsThunk(id));
  };



  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Otaq Adı</label>
        <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        
        <label htmlFor="firstPhoto">Birinci Şəkil</label>
        <input id="firstPhoto" name="firstPhoto" type="text" onChange={formik.handleChange} value={formik.values.firstPhoto} />
        
        <label htmlFor="secondPhoto">İkinci Şəkil</label>
        <input id="secondPhoto" name="secondPhoto" type="text" onChange={formik.handleChange} value={formik.values.secondPhoto} />
        
        <label htmlFor="thirdPhoto">Üçüncü Şəkil</label>
        <input id="thirdPhoto" name="thirdPhoto" type="text" onChange={formik.handleChange} value={formik.values.thirdPhoto} />
        
        <label htmlFor="maxPeople">Maksimum İnsan Sayı</label>
        <input id="maxPeople" name="maxPeople" type="number" onChange={formik.handleChange} value={formik.values.maxPeople} />
        
        <label htmlFor="sahe">Sahə (m²)</label>
        <input id="sahe" name="sahe" type="text" onChange={formik.handleChange} value={formik.values.sahe} />
        
        <label htmlFor="otaqSayi">Otaq Sayı</label>
        <input id="otaqSayi" name="otaqSayi" type="number" onChange={formik.handleChange} value={formik.values.otaqSayi} />
        
        <label htmlFor="price">Qiymət</label>
        <input id="price" name="price" type="text" onChange={formik.handleChange} value={formik.values.price} />
        
        <label htmlFor="roominformation">Otaq Haqqında Məlumat</label>
        <textarea id="roominformation" name="roominformation" onChange={formik.handleChange} value={formik.values.roominformation} />
        
        <button type="submit">Əlavə et</button>
      </form>

      <div className={styles.cards}>
        {room && room.map((item, index) => (
          <div key={index} className={styles.card}>
            <Carousel showThumbs={false} dynamicHeight={true}>
              <div>
                <img src={item.firstPhoto} alt={item.name} />
              </div>
              <div>
                <img src={item.secondPhoto} alt={item.name} />
              </div>
              <div>
                <img src={item.thirdPhoto} alt={item.name} />
              </div>
            </Carousel>
            <div className={styles.info}>
              <h5>{item.name}</h5>
              <p>{item.maxPeople} qonaq</p>
              <p>{item.sahe} m²</p>
              <p>{item.otaqSayi} otaq</p>
              <p>{item.totalroom} nömrə qalıb</p>
              <p>{item.price} AZN</p>
              <button onClick={() => deleteItem(item._id)} className={styles.deleteBtn}>SIL</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;