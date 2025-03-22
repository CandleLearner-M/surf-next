import Image from "next/image";
import styles from "./Card.module.scss";

interface CardProps {
  data: {
    imageSrc: string;
    title: string;
    date: string;
    price?: string;
  };
}

function Card({ data }: CardProps) {
  const { imageSrc, title, date, price } = data;
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={title} width={420} height={355} />
      <p>{title}</p>

      <small>{date}</small>
      {price && <small>{price}</small>}
    </div>
  );
}
export default Card;
