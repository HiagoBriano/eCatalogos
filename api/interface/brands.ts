export interface CreateBrandDTO {
  name: string;
  companyId: number;
  minValue?: number;
  minInstallmentsValue?: number;
  orderSkus?: string;
  visible?: boolean;
  cnpj?: string;
}

export interface UpdateBrandDTO {
  name?: string;
  companyId?: number;
  minValue?: number;
  minInstallmentsValue?: number;
  orderSkus?: string;
  visible?: boolean;
  cnpj?: string;
}
