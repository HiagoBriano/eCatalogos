export interface CreateSkuDTO {
  size: string;
  stock: bigint;
  productId: number;
  minQuantity: number;
  openGrid: boolean;
  idErp?: string;
}

export interface UpdateSkuDTO {
  size?: string;
  stock?: bigint;
  productId?: number;
  minQuantity?: number;
  openGrid?: boolean;
  idErp?: string;
}
