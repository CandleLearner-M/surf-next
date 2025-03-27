import HomeBlogs from "@/components/Blog/HomeBlogs/HomeBlogs";
import HeroSection from "@/components/HeroSection/HeroSection";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import heroImg from "@/public/assets/heroImage.png";
import { fetchDataFromStrapi, processInfoBlock } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi(
    `infoblocks-landing?populate[info_blocks][populate]=*`
  );

  const homeInfoBlock = processInfoBlock(data);

  const strapLine = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness</h1>
    </>
  );

  return (
    <main>
      <HeroSection heroHeadlines={strapLine} heroImgSrc={heroImg} />

      {homeInfoBlock.map((homeInfoBlock) => (
        <InfoBlock data={homeInfoBlock} key={homeInfoBlock.id} />
      ))}

      <HomeBlogs />
    </main>
  );
}

export const revalidate = 300;
