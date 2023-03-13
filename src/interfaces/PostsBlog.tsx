export type CardProps = {
  id?: number;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  image: string;
  _embedded?: {
    'wp:featuredmedia': {
      media_details: {
        sizes: {
          medium_large: {
            source_url: string;
          }
        }
      }
    }[]
  };
}