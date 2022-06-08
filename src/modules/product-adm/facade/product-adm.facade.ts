import { UseCaseInterface } from "../../@shared/domain/usecase/use-case.interface";
import {
  AddProductFacadeInputDTO,
  CheckStockFacadeInputDTO,
  CheckStockFacadeOutputDTO,
} from "./product-adm.facade.dto";
import { ProductAdmFacadeInterface } from "./product-adm.facade.interface";

type ProductAdmFacadeProps = {
  addProductUseCase: UseCaseInterface;
  checkStockUseCase: UseCaseInterface;
};

class ProductAdmFacade implements ProductAdmFacadeInterface {
  private _addProductUseCase: UseCaseInterface;
  private _checkStockUseCase: UseCaseInterface;

  constructor({ addProductUseCase, checkStockUseCase }: ProductAdmFacadeProps) {
    this._addProductUseCase = addProductUseCase;
    this._checkStockUseCase = checkStockUseCase;
  }

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
