export interface Product {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFormData {
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category: string;
  description: string;
}
