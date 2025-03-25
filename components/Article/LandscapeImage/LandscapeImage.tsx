import Image from "next/image";

function LandscapeImage({ image }: { image: string }) {
  return <Image src={image} alt="Next surf Image" height={720} width={1080} />;
}
export default LandscapeImage;
