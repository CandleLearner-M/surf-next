import Image from "next/image";
import { ReactNode } from "react";

interface FeaturedBlogProps {
  data: {
    title: string;
    imageSrc: string;
    post: string;
    buttonCPN: ReactNode;
  };
}

function FeaturedBlog({ data }: FeaturedBlogProps) {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>{post}</p>
      </div>
      <Image src={imageSrc} alt="some img" height={1200} width={1900} />
    </section>
  );
}
export default FeaturedBlog;
