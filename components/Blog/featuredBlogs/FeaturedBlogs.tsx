import Card from "@/components/Card/Card";

import img from "@/public/assets/image1.png";

function FeaturedBlogs() {
  const data = {
    imageSrc: img,
    title: `surfboard shaping and 
design behind the scenes of crafting the perfect board `,

    date: "Monday, June 05, 2023",
    price: "Prices starting at 580€",
  };

  return (
    <section>
      <Card data={data} />
    </section>
  );
}
export default FeaturedBlogs;
