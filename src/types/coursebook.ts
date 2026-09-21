export type CoursebookType = "single" | "pass";

export type Coursebook = {
  id: number;
  type: CoursebookType;
  title: string;
  price: number;
  discount_rate: number;
  sale_price: number;
  image_url: string;
};

export const TYPE_LABEL: Record<CoursebookType, string> = {
  single: "단품",
  pass: "패스",
};
