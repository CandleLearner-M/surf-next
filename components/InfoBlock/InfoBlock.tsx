"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./infoBlock.module.scss";

interface TextElement {
  type: "text";
  text: string;
}

interface ParagraphElement {
  type: "paragraph";
  children: TextElement[];
}

interface InfoBlockProps {
  data: {
    headline: string;
    text: ParagraphElement[];
    imageSrc: string | StaticImageData;
    button: { id: string; text: string; color: string; slug: string };
    showImageInRight: boolean;
  };
}

function InfoBlock({ data }: InfoBlockProps) {
  console.log(data);
  const {
    imageSrc,
    headline: title,
    text: paragraphs,
    button: { text: btnTxt, color, slug },
    showImageInRight: reversed,
  } = data;

  return (
    <section className={styles.infoblock}>
      <div
        className={`${styles.infoblock__imgcontainer} ${
          reversed ? styles.imgright : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt="image"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className={styles.infoblock__text}>
        <h1>{title}</h1>
        <p>
          {paragraphs?.map((paragraph) => paragraph.children[0].text + "\n")}
        </p>

        <button className={`btn btn-medium btn-${color}`}>
          <Link href={slug}>{btnTxt}</Link>
        </button>
      </div>
    </section>
  );
}
export default InfoBlock;
