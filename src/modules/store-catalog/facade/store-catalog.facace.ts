import { UseCaseInterface } from "../../@shared/domain/usecase/use-case.interface";
import { FindAllProductsOutputDTO } from "../usecase/find-all-products/find-all-products.dto";
import {
  FindStoreCatalogFacadeInputDTO,
  FindStoreCatalogFacadeOutputDTO,
} from "./store-catalog.facade.dto";
import { StoreCatalogFacadeInterface } from "./store-catalog.facade.interface";

type StoreCatalogFacadeProps = {
  findAllProductsUseCase: UseCaseInterface;
  findProductUseCase: UseCaseInterface;
};

class StoreCatalogFacade implements StoreCatalogFacadeInterface {
  private readonly _findAllProductsUseCase: UseCaseInterface;
  private readonly _findProductUseCase: UseCaseInterface;

  constructor({
    findAllProductsUseCase,
    findProductUseCase,
  }: StoreCatalogFacadeProps) {
    this._findAllProductsUseCase = findAllProductsUseCase;
    this._findProductUseCase = findProductUseCase;
  }

  async findAll(): Promise<FindAllProductsOutputDTO> {
    return this._findAllProductsUseCase.execute({});
  }

  async findByPk(
    productId: FindStoreCatalogFacadeInputDTO
  ): Promise<FindStoreCatalogFacadeOutputDTO> {
    return this._findProductUseCase.execute(productId);
  }
}

export { StoreCatalogFacade };
