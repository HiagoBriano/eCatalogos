export interface CreateColorDTO {
  name: string;
  productId: number;
  rgb?: string;
  hexCode?: string;
}

export interface UpdateColorDTO {
  name?: string;
  productId?: number;
  rgb?: string;
  hexCode?: string;
}
