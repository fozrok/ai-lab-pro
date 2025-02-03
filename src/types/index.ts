export interface Tool {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  rating: number;
  reviews: number;
  categories: string[];
  tags: string[];
  isHidden?: boolean;
}