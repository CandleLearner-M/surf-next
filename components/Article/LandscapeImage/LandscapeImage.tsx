import Image from "next/image";

function LandscapeImage({
  image,
}: {
  image: string;
  caption: string;
}) {
  return (
    <div>
      <Image
        style={{
          objectFit: "cover",
          display: "block",
          margin: "6rem auto",
          marginBottom: "8.8rem",
        }}
        src={image}
        alt="Next surf Image"
        height={599}
        width={898}
      />
    </div>
  );
}
export default LandscapeImage;
