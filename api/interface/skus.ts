export interface CreateSkuDTO {
  size: string;
  stock: number;
  productId: number;
  minQuantity: number;
  openGrid: boolean;
  idErp?: string;
}

export interface UpdateSkuDTO {
  size?: string;
  stock?: number;
  productId?: number;
  minQuantity?: number;
  openGrid?: boolean;
  idErp?: string;
}
