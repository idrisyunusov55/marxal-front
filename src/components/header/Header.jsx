import React, { useState } from 'react';
import styles from './Header.module.scss';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa'; // X işarəsini əlavə etmək üçün
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = useNavigate()
  const goRooms = () => {
    navigation('/rooms')
  }

  const goHome = () => {
    navigation('/')
  }

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
          <img onClick={goHome} src="https://www.marxalresort.az/assets/images/3-2868x2153.png" alt="" />
        </div>
        <div className={styles.second}>
          <nav>
            <ul>
              <li><a href="">Sağlamlıq və Spa</a></li>
              <li><a href="">Tədbirlər</a></li>
              <li><a href="">Tur və Nəqliyyat</a></li>
              <li><a href="">Media</a></li>
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
            <li><a href="">Media</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
