import styles from "./rightbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            className={styles.bg}
            src="/breakie.png"
            alt="Picture of the breakfast club"
            fill
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🥑 Available Now</span>
          <h3 className={styles.title}>
            How to enjoy your breakie for your life x
          </h3>
          <span className={styles.subtitle}>Take 5 minutes to make</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Link
            href="https://youtu.be/Guxx_KTm_6M?si=-tvtUmB2Yn4TfLi9"
            target="_blank"
            passHref
          >
            <button className={styles.button} aria-label="Watch Video">
              <MdPlayCircleFilled />
              Watch
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How to enjoy your breakie x</h3>
          <span className={styles.subtitle}>Take 5 minutes to make</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
