type ProductDTOProps = {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
};

interface FindAllProductsOutputDTO {
  products: ProductDTOProps[];
}

export { FindAllProductsOutputDTO };
