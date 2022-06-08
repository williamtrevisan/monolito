import { UseCaseInterface } from "../../@shared/domain/usecase/use-case.interface";
import {
  AddProductFacadeInputDTO,
  CheckStockFacadeInputDTO,
  CheckStockFacadeOutputDTO,
} from "./product-adm.facade.dto";
import { ProductAdmFacadeInterface } from "./product-adm.facade.interface";

class ProductAdmFacade implements ProductAdmFacadeInterface {
  constructor(
    private readonly _addProductUseCase: UseCaseInterface,
    private readonly _checkStockUseCase: UseCaseInterface
  ) {}

  async addProduct(input: AddProductFacadeInputDTO): Promise<void> {
    await this._addProductUseCase.execute(input);
  }

  checkStock(
    input: CheckStockFacadeInputDTO
  ): Promise<CheckStockFacadeOutputDTO> {
    return this._checkStockUseCase.execute(input);
  }
}

export { ProductAdmFacade };
