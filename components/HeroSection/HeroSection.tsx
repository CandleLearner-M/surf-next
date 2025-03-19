import Image from "next/image";
import styles from "./HeroSection.module.scss";
import Link from "next/link";
import logo from "@/public/assets/Logo.svg";
import { ReactNode } from "react";

interface HeroSectionProps {
  theme?: string;
  heroHeadlines: ReactNode;
  heroImgSrc: string;
}

function HeroSection({
  theme = "turquoise",
  heroHeadlines,
  heroImgSrc,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__background}>
        <Image
          src={heroImgSrc}
          alt="hero background"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={`${styles.hero__headlines} ${styles[theme]}`}>
        {heroHeadlines || <h1>Headline Missing</h1>}
      </div>

      <button className={`btn btn-medium btn--${theme}`}>
        <Link href="/events">BOOK NOW</Link>
      </button>

      <Image src={logo} alt="logo" priority className={`${styles.hero__logo} ${styles[theme]}`} />
    </section>
  );
}
export default HeroSection;
