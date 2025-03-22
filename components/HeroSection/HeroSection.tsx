import Image, { StaticImageData } from "next/image";
import styles from "./HeroSection.module.scss";
import Link from "next/link";
import logo from "@/public/assets/Logo.svg";
import { ReactNode } from "react";

interface HeroSectionProps {
  theme?: "orange" | "turquoise";
  heroHeadlines: ReactNode;
  heroImgSrc: string | StaticImageData;
}

function HeroSection({
  theme = "turquoise",
  heroHeadlines,
  heroImgSrc,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div
        className={`${styles.hero__background} ${
          theme === "orange" ? styles.reversed : ""
        }`}
      >
        <Image
          src={heroImgSrc}
          alt="hero background"
          width={1900}
          height={1220}
          priority
        />
      </div>

      <div
        className={`${styles.hero__headlines} ${
          theme === "turquoise" ? "" : styles.theme
        }`}
      >
        {heroHeadlines || <h1>Headline Missing</h1>}
      </div>

      <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/events">Book Now</Link>
      </button>

      <Image
        src={logo}
        alt="logo"
        priority
        className={`${styles.hero__logo} ${
          theme === "turquoise" ? "" : styles.anothertheme
        }`}
      />
    </section>
  );
}
export default HeroSection;
