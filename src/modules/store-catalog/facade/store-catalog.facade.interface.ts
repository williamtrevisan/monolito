import { FindAllProductsOutputDTO } from "../usecase/find-all-products/find-all-products.usecase.dto";
import {
  FindStoreCatalogFacadeInputDTO,
  FindStoreCatalogFacadeOutputDTO,
} from "./store-catalog.facade.dto";

interface StoreCatalogFacadeInterface {
  findAll(): Promise<FindAllProductsOutputDTO>;
  findByPk(
    productId: FindStoreCatalogFacadeInputDTO
  ): Promise<FindStoreCatalogFacadeOutputDTO>;
}

export { StoreCatalogFacadeInterface };
