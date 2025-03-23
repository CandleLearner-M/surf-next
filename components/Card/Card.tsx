import Image from "next/image";
import styles from "./Card.module.scss";
import Link from "next/link";

interface CardProps {
  data: {
    imageSrc: string;
    title: string;
    date: string;
    price?: string;
    slug: string
  };
}

function Card({ data }: CardProps) {
  const { imageSrc, title, date, price, slug } = data;
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <Image src={imageSrc} alt={title} width={420} height={355} />
      <p>{title}</p>
      <small>{date} </small>

      {price && <small>{price}</small>}
    </Link>
  );
}
export default Card;
