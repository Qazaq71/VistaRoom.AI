export type InteriorStyleCategory =
  | "popular"
  | "premium"
  | "nature"
  | "trendy";

export type InteriorStyle = {
  id: string;
  slug: string;
  displayName: string;
  emoji: string;
  category: InteriorStyleCategory;

  description: string;
  promptFragment: string;

  previewImage?: string;

  colors?: string[];
  materials?: string[];
  furniture?: string[];
  lighting?: string[];
  decor?: string[];
  negatives?: string[];
  tags?: string[];
};

export type InteriorMyStyle = {
  id: "my_style";
  displayName: string;
  emoji: string;
  description: string;
};
