export interface Article {
  id: number;
  documentId: string;
  headline: string;
  excerpt: string;
  published: string; // Format: "YYYY-MM-DD"
  author: string;
  createdAt: string; // ISO date string
  publishedAt: string; // ISO date string
  updatedAt: string; // ISO date string
  image: string; // URL
  isFeaturedArticle: boolean;
  slug: string;
  textColor: 'white' | 'black';
  articleContent: ArticleContentItem[];
}

interface BaseContentItem {
  __component: string;
  id: number;
}

interface ParagraphHeadline extends BaseContentItem {
  __component: "blog-article.paragraph-headline";
  headline: string;
  slug: string;
}

interface Paragraph extends BaseContentItem {
  __component: "blog-article.paragraph";
  paragraph: string;
}

interface ParagraphWithImage extends BaseContentItem {
  __component: "blog-article.paragraph-with-image";
  paragraph: string;
  isLandscape: boolean;
  imageShowsRight: boolean;
  image: string; // URL to image
}

interface LandscapeImage extends BaseContentItem {
  __component: "blog-article.landscape-image";
  imageCaption: string;
  image: string; // URL to image
}

export type ArticleContentItem =
  | ParagraphHeadline
  | Paragraph
  | ParagraphWithImage
  | LandscapeImage;
