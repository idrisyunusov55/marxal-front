import styles from "./Footer.module.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <p>Sosial şəbəkələrimiz</p>
          <div className={styles.icons}>
            <FaFacebookF className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaLinkedinIn className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>
          <address>
            <p>Marxal Resort & Spa, Azərbaycan, Şəki</p>
            <p>Tel: +994 (12) 585 35 85</p>
            <p>Mob: +994 (55) 500 35 85</p>
            <p>E-poçt: reservation@marxalresort.az</p>
          </address>
        </div>
        <div className={styles.subscription}>
          <p><em>Yeni kampaniyalar və endirimlərdən xəbərdar olmaq üçün abunə olun...</em></p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="E-poçt ünvanınızı daxil edin..." className={styles.input} />
            <button className={styles.fbtn}>Göndər</button>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© 2025 Bütün hüquqlar qorunur.</p>
    </footer>
  );
};

export default Footer;
