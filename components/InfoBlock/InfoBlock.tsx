"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./infoBlock.module.scss";
import { ReactNode } from "react";

interface InfoBlockProps {
  data: {
    headline: string;
    text: ReactNode;
    imgSrc: string | StaticImageData;
    button: ReactNode;
    reversed: boolean;
  };
}

function InfoBlock({ data }: InfoBlockProps) {
  const { imgSrc, headline: title, text: paragraph, button, reversed } = data;
  return (
    <section className={styles.infoblock}>
      <div
        className={`${styles.infoblock__imgcontainer} ${
          reversed ? styles.imgright : ""
        }`}
      >
        <Image
          src={imgSrc}
          alt="image"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className={styles.infoblock__text}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        {button}
      </div>
    </section>
  );
}
export default InfoBlock;
