import HeroSection from "@/components/HeroSection/HeroSection";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import img from "@/public/assets/image1.png";
import { fetchDataFromStrapi, processInfoBlock } from "@/utils/strapi.utils";

export default async function Blog() {
  const data = await fetchDataFromStrapi(
    `infoblocks-experience?populate[info_blocks][populate]=*`
  );

  const homeInfoBlock = processInfoBlock(data);

  const straplines = (
    <>
      <h1>discover.</h1>
      <h1>your.</h1>
      <h1>spirit.</h1>
    </>
  );

  return (
    <main>
      <HeroSection theme="orange" heroHeadlines={straplines} heroImgSrc={img} />
      {homeInfoBlock.map((homeInfoBlock) => (
        <InfoBlock data={homeInfoBlock} key={homeInfoBlock.id} />
      ))}
    </main>
  );
}


export const revalidate = 300;