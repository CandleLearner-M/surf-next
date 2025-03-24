import Image from "next/image";
import styles from "./Card.module.scss";
import Link from "next/link";
import { Article } from "@/types/types";

interface CardProps {
  data: Article;
}

function Card({ data }: CardProps) {
  const { image, headline, createdAt, price, slug } = data;
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <Image src={image} alt={headline} width={420} height={355} />
      <p>
        {headline.length > 70
          ? headline.split(" ").slice(0, 11).join(" ") + "..."
          : headline}
      </p>

      <small>{createdAt}</small>

      {price && <small>{price}</small>}
    </Link>
  );
}
export default Card;
