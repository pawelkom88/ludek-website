import type { EntryFieldTypes } from "contentful";

export type ContentfulImage = {
  fields: {
    title: EntryFieldTypes.Text;
    file: {
      url: string;
    };
  };
};

export interface NewsPosts {
  contentTypeId: "news";
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    image: ContentfulImage;
    date: EntryFieldTypes.Date;
    slug: EntryFieldTypes.Text;
    author: EntryFieldTypes.Text;
  };
}
