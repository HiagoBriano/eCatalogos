export interface CreateProductDTO {
  name: string;
  reference: string;
  promptDelivery: boolean;
  price?: number;
  category?: string;
  description?: string;
  brand?: string;
  gender?: string;
  stock?: number;
  type?: string;
  subcategory?: string;
  companyId?: number;
  idErp?: string;
  brandId?: number;
  deadlineId?: number;
  variantId?: number;
}

export interface UpdateProductDTO {
  name?: string;
  reference?: string;
  promptDelivery?: boolean;
  price?: number;
  category?: string;
  description?: string;
  brand?: string;
  gender?: string;
  stock?: number;
  type?: string;
  subcategory?: string;
  companyId?: number;
  idErp?: string;
  brandId?: number;
  deadlineId?: number;
  variantId?: number;
}
