import React from "react";
import styles from "../styles/Header.module.css";
import Logo from "../assets/images/logo1.svg";
// import Avatar from "../assets/images/avatar.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <img src={Logo} alt="stuff" />      
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            // style={{ backgroundImage: 'url(${Avatar})' }}
          />
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
        </div>
          <svg className={styles["icon-cart"]}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
          </svg>

          <span className={styles.count}>1</span>
      </div>
    </header>
  );
};

export default Header;
