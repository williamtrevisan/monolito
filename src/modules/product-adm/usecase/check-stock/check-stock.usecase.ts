import { ProductGateway } from "../../gateway/product.gateway";
import { CheckStockInputDTO, CheckStockOutputDTO } from "./check-stock.dto";

class CheckStockUseCase {
  constructor(private readonly _productRepository: ProductGateway) {}

  async execute({
    productId,
  }: CheckStockInputDTO): Promise<CheckStockOutputDTO> {
    const product = await this._productRepository.findByPk(productId);

    return {
      productId: product.id.id,
      stock: product.stock,
    };
  }
}

export { CheckStockUseCase };
