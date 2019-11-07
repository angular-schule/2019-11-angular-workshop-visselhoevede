export interface Book {
  isbn: string;
  title: string;
  description: string;
  rating: number;
  published: Date | string;
  firstThumbnailUrl: string;
}
