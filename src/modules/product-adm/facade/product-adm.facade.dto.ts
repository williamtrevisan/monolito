interface AddProductFacadeInputDTO {
  id?: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

interface CheckStockFacadeInputDTO {
  productId: string;
}

interface CheckStockFacadeOutputDTO {
  productId: string;
  stock: number;
}

export {
  AddProductFacadeInputDTO,
  CheckStockFacadeInputDTO,
  CheckStockFacadeOutputDTO,
};
