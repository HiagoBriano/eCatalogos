export interface CreateImageDTO {
  path: string;
  order: number;
  productId: number;
  companyKey?: string;
}

export interface UpdateImageDTO {
  path?: string;
  order?: number;
  productId?: number;
  companyKey?: string;
}
