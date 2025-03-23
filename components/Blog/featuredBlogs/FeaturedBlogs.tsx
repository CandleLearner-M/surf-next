import Card from "@/components/Card/Card";

import img from "@/public/assets/image1.png";

import styles from "./FeaturedBlogs.module.scss";

function FeaturedBlogs() {
  const data = [
    {
      imageSrc: img,
      title: `Surfboard shaping and 
design behind the scenes of crafting the perfect board `,

      date: "Monday, June 05, 2023",
      price: "Prices starting at 580€",
      slug: "something",
    },
    {
      imageSrc: img,
      title: `Surfboard shaping and 
design behind the scenes of crafting the perfect board `,

      date: "Monday, June 05, 2023",
      price: "Prices starting at 580€",
      slug: "something",
    },
    {
      imageSrc: img,
      title: `Surfboard shaping and 
design behind the scenes of crafting the perfect board, Surfboard shaping and 
design behind the scenes of crafting the perfect board`,

      date: "Monday, June 05, 2023",
      price: "Prices starting at 580€",
      slug: "something",
    },
  ];

  return (
    <section className={styles.blogs}>
      <h3>Our featured articles</h3>
      <div>
        {data.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </div>

      <button className="btn btn--medium btn--turquoise">See More</button>
    </section>
  );
}
export default FeaturedBlogs;
