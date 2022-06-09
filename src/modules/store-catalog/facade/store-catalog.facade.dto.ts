interface FindStoreCatalogFacadeInputDTO {
  productId: string;
}

interface FindStoreCatalogFacadeOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}

type ProductDTOProps = {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
};

interface FindAllStoreCatalogFacadeOutputDTO {
  products: ProductDTOProps[];
}

export {
  FindStoreCatalogFacadeInputDTO,
  FindStoreCatalogFacadeOutputDTO,
  FindAllStoreCatalogFacadeOutputDTO,
};
