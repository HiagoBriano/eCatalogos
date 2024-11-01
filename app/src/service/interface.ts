export interface ApiResponse {
  message: string | null;
  success: boolean;
  data: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  reference: string;
  price: number | null;
  category: string;
  description: string | null;
  brand: string | null;
  gender: string;
  stock: number | null;
  type: string | null;
  subcategory: string | null;
  promptDelivery: boolean;
  companyId: number;
  idErp: string | null;
  brandId: number | null;
  deadlineId: number | null;
  variantId: number | null;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  colors: Color[];
  images: IImage[];
  skus: ISku[];
  company: Company;
  brandRelation: null;
}

interface Color {
  id: number;
  name: string;
  rgb: string | null;
  hexCode: string;
  productId: number;
  createdAt: string;
  updatedAt: string | null;
}

export interface IImage {
  id: number;
  path: string;
  order: number;
  productId: number;
  companyKey: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISku {
  id: number;
  size: string;
  stock: number;
  productId: number;
  minQuantity: number;
  deleted: boolean;
  openGrid: boolean;
  idErp: string | null;
  createdAt: string;
  updatedAt: string | null;
}

interface Company {
  id: number;
  name: string;
  mail: string;
  cnpj: string;
  key: number;
  login: string;
  pass: string;
  apiKey: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
}
