export interface PostQueryResponse {
  posts: {
    edges: Array<{
      node: {
        id: string;
        content: string;
        excerpt: string;
        date: string;
        author: {
          node: {
            name: string;
          };
        };
        title: string;
        slug: string;
        language: {
          code: string;
          locale: string;
        };
        featuredImage: {
          node: {
            mediaItemUrl: string;
            altText: string;
          };
        };
      };
    }>;
  };
}
