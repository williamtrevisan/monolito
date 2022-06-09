/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { ProductGateway } from "../../gateway/product.gateway";
import { FindAllProductsOutputDTO } from "./find-all-products.usecase.dto";

class FindAllProductsUseCase implements UseCaseInterface {
  constructor(private readonly _productRepository: ProductGateway) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(input: any): Promise<FindAllProductsOutputDTO> {
    const products = await this._productRepository.findAll();

    return {
      products: products.map((product) => ({
        id: product.id.id,
        name: product.name,
        description: product.description,
        salesPrice: product.salesPrice,
      })),
    };
  }
}

export { FindAllProductsUseCase };
