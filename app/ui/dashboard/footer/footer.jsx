import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Cutie Math</div>
      <div className={styles.text}>@ Cutie Rights Reserved x</div>
    </div>
  );
};

export default Footer;
