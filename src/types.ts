// Definizione dei tipi per il contenuto
export type Section = {
  id: string;
  title: string;
  content: Array<ContentBlock>;
};

export type ContentBlock = {
  type: 'paragraph' | 'image' | 'subtitle' | 'list';
  content: string;
  imageUrl?: string;
  items?: string[];
};
