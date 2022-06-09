interface FindProductInputDTO {
  productId: string;
}

interface FindProductOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}

export { FindProductInputDTO, FindProductOutputDTO };
