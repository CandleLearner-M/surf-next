import Card from "@/components/Card/Card";

import img from "@/public/assets/image1.png";

import styles from './FeaturedBlogs.module.scss'

function FeaturedBlogs() {
  const data = {
    imageSrc: img,
    title: `Surfboard shaping and 
design behind the scenes of crafting the perfect board `,

    date: "Monday, June 05, 2023",
    price: "Prices starting at 580€",
  };

  return (
    <section className={styles.blogs}>
      <h3>Our featured articles</h3>
      <div>
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
      </div>
    </section>
  );
}
export default FeaturedBlogs;
