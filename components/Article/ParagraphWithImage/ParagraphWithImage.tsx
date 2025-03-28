import Image from "next/image";
import Markdown from "react-markdown";
import styles from "./ParagraphWithImage.module.scss";

function ParagraphWithImage({
  paragraph,
  image,
  imageShowsRight,
  isLandscape,
}: {
  paragraph: string;
  image: string;
  imageShowsRight: boolean;
  isLandscape: boolean;
}) {
  return (
    <div className={styles.paragraphwithimage}>
      <div className={styles.markdowncontainer}>
        <Markdown>{paragraph}</Markdown>
      </div>
      <Image
        className={`${!imageShowsRight ? styles.imageshowsleft : ""} ${
          !isLandscape ? styles.portrait : ""
        }`}
        src={image}
        alt={paragraph.slice(0, 10)}
        height={1080}
        width={720}
      />
    </div>
  );
}
export default ParagraphWithImage;
