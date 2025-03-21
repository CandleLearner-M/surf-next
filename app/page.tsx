import HeroSection from "@/components/HeroSection/HeroSection";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import heroImg from "@/public/assets/heroImage.png";
import img from "@/public/assets/image1.png";
import { fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi(
    `infoblocks-landing?populate[info_blocks][populate]=*`
  );

  console.log(data.attributes);

  const strapLine = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness</h1>
    </>
  );

  const infoBlockData = {
    headline: "the experience.",
    text: `  At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing
        adventure. Nestled in the heart of [Location] our surf camp offers an
        exhilarating experience for beginners, intermediate surfers, and
        seasoned wave riders alike. Dive into the world of surfing with our
        expert instructors who have years of experience and a deep passion for
        the sport. Whether you're a first-time surfer looking to catch your
        first wave or a seasoned pro seeking to enhance your skills, our
        dedicated team is here to guide you every step of the way. Immerse
        yourself in the natural beauty of our surf camp's surroundings. Picture
        yourself waking up to the sound of crashing waves and feeling the warm
        sand beneath your feet. With pristine beaches and a vibrant coastal
        atmosphere, [Location] sets the perfect stage for your surf adventure.
   `,

    button: <button className="btn btn--orange btn--medium">Book Now</button>,
    imgSrc: img,
    reversed: false,
  };

  return (
    <main>
      <HeroSection heroHeadlines={strapLine} heroImgSrc={heroImg} />
      <InfoBlock data={infoBlockData} />

      <InfoBlock
        data={{
          ...infoBlockData,
          reversed: true,
          button: (
            <button className="btn btn--turquoise btn--medium">Book Now</button>
          ),
        }}
      />
    </main>
  );
}
