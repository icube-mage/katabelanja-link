import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          src="/assets/images/main-img-big-cropped.png"
          alt="Kata Belanja Main"
          width={648}
          height={648}
          className={styles.mainImg}
        />
      </div>
      <div>
        <div className={styles.headerWrapper}>
          <Image
            src="/assets/images/Logo-KataBelanja.png"
            alt="Kata Belanja Logo"
            width={170}
            height={106}
            priority
          />
          <h1 className={styles.titleHeading}>
            Find trending products with one app.
          </h1>
        </div>
        <div className={styles.logoWrapper}>
          <a target="_self" href="/">
            <Image
              src="/assets/images/iosstore.png"
              alt="Ios Logo"
              width={120}
              height={40}
            />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.katabelanja.id"
          >
            <Image
              src="/assets/images/playstore.png"
              alt="Kata Belanja Android"
              width={120}
              height={40}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
