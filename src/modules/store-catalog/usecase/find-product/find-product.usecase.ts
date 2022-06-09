import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { ProductGateway } from "../../gateway/product.gateway";
import { FindProductInputDTO, FindProductOutputDTO } from "./find-product.dto";

class FindProductUseCase implements UseCaseInterface {
  constructor(private readonly _productRepository: ProductGateway) {}

  async execute({
    productId,
  }: FindProductInputDTO): Promise<FindProductOutputDTO> {
    const product = await this._productRepository.findByPk(productId);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    };
  }
}

export { FindProductUseCase };
