import React from 'react'
import styles from './Information.module.scss'
import { useTheme } from '../../pages/context/context'

const InformationSec = () => {
   const { theme } = useTheme()
  return (
    <section  style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    }} className={styles.container}>
        <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.informatinCard}>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.imageWrapper}>
      <img
        src="https://www.marxalresort.az/assets/images/2m8a0676-1264x842.jpg"
        alt="Hotel Lobby"
        className={styles.image}
      />
    </div>
    
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.textWrapper}>
      <h2 className={styles.title}>
        İstirahət Kompleksimizə xoş gəlmişsiniz
      </h2>
      <p className={styles.description}>
        Azərbaycanın ən yaxşı otellərindən biri Marxal Resort & Spa füsunkarlığıyla 5 ulduzlu məkanın lüks və
        rahatlığını özündə birləşdirir. İçəri addımladığınız ilk andan bura Sizi özü ilə uzaqlara aparır. Bu otelin
        qüsursuz qonaqpərvərliyi Sizi səfəriniz boyunca öz evinizdə olduğu kimi əziz qonaq hissini verəcək.
      </p>
      <button className={styles.button}>
        Ətraflı
      </button>
    </div>
    </div>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.informatinCard}>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.imageWrapper}>
      <img
        src="https://www.marxalresort.az/assets/images/9s7a5808-1264x842.jpg"
        alt="Hotel Lobby"
        className={styles.image}
      />
    </div>
    
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.textWrapper}>
      <h2 className={styles.title}>
      Otaqlar
      </h2>
      <p className={styles.description}>
      Lüks və rahatlıqla təmin edilən möhtəşəm otaq və suitlərimizdə gözəl gecə yuxusundan həzz alın.
      </p>
      <button className={styles.button}>
        Ətraflı
      </button>
    </div>
    </div>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.informatinCard}>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.imageWrapper}>
      <img
        src="https://www.marxalresort.az/assets/images/esas-2.jpg"
        alt="Hotel Lobby"
        className={styles.image}
      />
    </div>
    
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.textWrapper}>
      <h2 className={styles.title}>
      Bar və Restoranlar
      </h2>
      <p className={styles.description}>
      Bizim Kompleks qonaqlarına müasir avadanlıqlarla təchiz olunmuş, peşəkar heyət və ləziz mətbəxi ilə bir neçə restoran təqdim edir. Siz bizim restoranlarımızda milli və xarici mətbəxin təamlarını dada bilərsiniz.
      </p>
      <button className={styles.button}>
        Ətraflı
      </button>
    </div>
    </div>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.informatinCard}>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.imageWrapper}>
      <img
        src="https://www.marxalresort.az/assets/images/1280x860-1280x860.jpg"
        alt="Hotel Lobby"
        className={styles.image}
      />
    </div>
    
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.textWrapper}>
      <h2 className={styles.title}>
      Sağlamlıq və Spa

      </h2>
      <p className={styles.description}>
      Dünyanın hər yerindən yüksək keyfiyyətli və zövqlü markaları istifadə edərək zəngin müalicə üsullarını kəşf edin. Xidmətlərimizə üz masajları, lüks masajlar, bədən yumşaldıcı və qüvvətləndirici müalicəvi masajlar, türk hamamı daxildir.


      </p>
      <button className={styles.button}>
        Ətraflı
      </button>
    </div>
    </div>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.informatinCard}>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.imageWrapper}>
      <img
        src="https://www.marxalresort.az/assets/images/800x533-800x533.jpg"
        alt="Hotel Lobby"
        className={styles.image}
      />
    </div>
    
    <div className={styles.textWrapper}>
      <h2 className={styles.title}>
      Əyləncə
      </h2>
      <p className={styles.description}>
      Əziz qonaqlar, Marxal Resort & Spa Sizə boulinq oyununu məmnunluqla təqdim edir. Rus bilyardının rahat və xoş mühitində istirahət edin. Siz ailənizlə, iş yoldaşlarınızla, dostlarınızla əyləncə mərkəzində maraqlı vaxt keçirə yüngül qəlyanaltı menyusundan dadlı təamlar və müxtəlif içkilər sifariş edə bilərsiniz.
      </p>
      <button className={styles.button}>
        Ətraflı
      </button>
    </div>
    </div>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.informatinCard}>
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.imageWrapper}>
      <img
        src="https://www.marxalresort.az/assets/images/443a9485-1264x842.jpg"
        alt="Hotel Lobby"
        className={styles.image}
      />
    </div>
    
    <div  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  }} className={styles.textWrapper}>
      <h2 className={styles.title}>
      Konfranslar və Tədbirlər
      </h2>
      <p className={styles.description}>
        
Marxal Resort & Spa fərdi və ictimai tədbirlər, konfranslar və iş görüşləri üçün ideal seçimdir.
      </p>
      <button className={styles.button}>
        Ətraflı
      </button>
    </div>
    </div>
  </section>
  )
}

export default InformationSec