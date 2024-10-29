export interface CreateCompanyDTO {
  name: string;
  key: number;
  login: string;
  pass: string;
  apiKey: string;
  mail?: string;
  cnpj?: string;
  deleted?: boolean;
}

export interface UpdateCompanyDTO {
  name?: string;
  key?: number;
  login?: string;
  pass?: string;
  apiKey?: string;
  mail?: string;
  cnpj?: string;
}
