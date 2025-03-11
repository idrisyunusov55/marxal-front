import React, { useState } from 'react';
import styles from './Header.module.scss';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';   
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/redurces/authSlice';
import { getUserReservationsThunk } from '../../redux/redurces/roomCards';
import { useTheme } from '../../pages/context/context';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); 

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goRooms = () => {
    navigate('/rooms');
  };

  const goHome = () => {
    navigate('/');
  };

  const goOdenis = async () => {
    try {
      const response = await dispatch(getUserReservationsThunk(user._id)).unwrap();
      navigate('/odenis', { state: { reservations: response } });
    } catch (error) {
      console.error("❌ Rezervasiya məlumatları alınarkən xəta:", error);
    }
  };
  

  const goQediyyat = () => {
    navigate('/qediyyat');
  };


  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/"); 
  };

  const {theme, toggleTheme} = useTheme()

  return (
    <header  style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    }} className={styles.header}>
      <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.container}>
        <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.first}>
   
          <nav>
            <ul>
              <li><a  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} href="">Haqqımızda</a></li>
              <li><a  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} onClick={goRooms} href="">Otaqlar</a></li>
              <li><a  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} href="">Restoranlar</a></li>
              <li><a  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} href="">Əyləncə</a></li>
            </ul>
          </nav>
        </div>
        <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.logo}>
          <img onClick={goHome} src="https://www.marxalresort.az/assets/images/3-2868x2153.png" alt="Logo" />
        </div>
        <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.second}>
          <nav>
            <ul>
              <li><a  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} href="">Sağlamlıq və Spa</a></li>
              <li><button className={styles.hbtn} onClick={toggleTheme}
         style={{
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white', 
          border:"none"
        }}
        >
          Dark/Ligth
        </button></li>
              {user ? ( 
                <li><a  style={{
                  backgroundColor: theme === 'light' ? 'white' : 'black',
                  color: theme === 'light' ? 'black' : 'white',
                }} onClick={handleLogout}>Çıxış</a></li>
              ) : (
                <li><a  style={{
                  backgroundColor: theme === 'light' ? 'white' : 'black',
                  color: theme === 'light' ? 'black' : 'white',
                }} onClick={goQediyyat}>Qeydiyyat</a></li>
              )}
              <li><a  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} onClick={goOdenis}>Ödəniş</a></li>
            </ul>
          </nav>
        </div>
        <FaBarsStaggered  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.bars}  onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <FaTimes className={styles.closeIcon} onClick={closeMenu} /> 
          <ul>
            <li><a onClick={goHome} href="">Ana Səhifə</a></li>
            <li><a href="">Haqqımızda</a></li>
            <li><a onClick={goRooms} href="">Otaqlar</a></li>
            <li><a href="">Restoranlar</a></li>
            <li><a href="">Əyləncə</a></li>
            <li><a href="">Sağlamlıq və Spa</a></li>
            <li><a href="">Tədbirlər</a></li>
            <li><a href="">Tur və Nəqliyyat</a></li>
            <li><a onClick={goOdenis} href="">Ödəniş</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
