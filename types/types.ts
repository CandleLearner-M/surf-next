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
}
