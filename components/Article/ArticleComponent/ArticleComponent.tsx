import { ArticleContentItem } from "@/types/types";
import Headline from "../Headline/Headline";
import LandscapeImage from "../LandscapeImage/LandscapeImage";
import Paragraph from "../Paragraph/Paragraph";
import ParagraphWithImage from "../ParagraphWithImage/ParagraphWithImage";

function ArticleComponent({ component }: { component: ArticleContentItem }) {
  switch (component.__component) {
    case "blog-article.paragraph-headline":
      return <Headline>{component.headline}</Headline>;

    case "blog-article.paragraph":
      return <Paragraph paragraph={component.paragraph} />;

    case "blog-article.landscape-image":
      return (
        <LandscapeImage
          image={component.image}
          caption={component.imageCaption}
        />
      );

    case "blog-article.paragraph-with-image":
      return (
        <ParagraphWithImage
          image={component.image}
          paragraph={component.paragraph}
          imageShowsRight={component.imageShowsRight}
          isLandscape={component.isLandscape}
        />
      );
    default:
      return null;
  }
}
export default ArticleComponent;
