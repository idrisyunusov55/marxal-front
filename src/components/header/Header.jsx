import React, { useState } from 'react';
import styles from './Header.module.scss';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';   
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/redurces/authSlice';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Redux-dan istifadəçi məlumatını götürürük

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

  const goOdenis = () => {
    navigate('/odenis');
  };

  const goQediyyat = () => {
    navigate('/qediyyat');
  };

  // Logout funksiyası
  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/"); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.first}>
          <nav>
            <ul>
              <li><a href="">Haqqımızda</a></li>
              <li><a onClick={goRooms} href="">Otaqlar</a></li>
              <li><a href="">Restoranlar</a></li>
              <li><a href="">Əyləncə</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.logo}>
          <img onClick={goHome} src="https://www.marxalresort.az/assets/images/3-2868x2153.png" alt="Logo" />
        </div>
        <div className={styles.second}>
          <nav>
            <ul>
              <li><a href="">Sağlamlıq və Spa</a></li>
              <li><a href="">Tədbirlər</a></li>
              {user ? ( 
                <li><a onClick={handleLogout}>Çıxış</a></li>
              ) : (
                <li><a onClick={goQediyyat}>Qeydiyyat</a></li>
              )}
              <li><a onClick={goOdenis}>Ödəniş</a></li>
            </ul>
          </nav>
        </div>
        <FaBarsStaggered className={styles.bars} onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <FaTimes className={styles.closeIcon} onClick={closeMenu} /> 
          <ul>
            <li><a href="">Haqqımızda</a></li>
            <li><a href="">Otaqlar</a></li>
            <li><a href="">Restoranlar</a></li>
            <li><a href="">Əyləncə</a></li>
            <li><a href="">Sağlamlıq və Spa</a></li>
            <li><a href="">Tədbirlər</a></li>
            <li><a href="">Tur və Nəqliyyat</a></li>
            <li><a href="">Ödəniş</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
