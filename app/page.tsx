import HeroSection from "@/components/HeroSection/HeroSection";
import heroImg from "@/public/assets/heroImage.png";

export default function Home() {
  const strapLine = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness</h1>
    </>
  );

  return (
    <main>
      <HeroSection heroHeadlines={strapLine} heroImgSrc={heroImg}  />
    </main>
  );
}
