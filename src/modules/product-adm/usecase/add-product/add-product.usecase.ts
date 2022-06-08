import { Product } from "../../domain/product.entity";
import { ProductGateway } from "../../gateway/product.gateway";
import { AddProductInputDTO, AddProductOutputDTO } from "./add-product-dto";

class AddProductUseCase {
  constructor(private readonly _productRepository: ProductGateway) {}

  async execute({
    name,
    description,
    purchasePrice,
    stock,
  }: AddProductInputDTO): Promise<AddProductOutputDTO> {
    const product = new Product({
      name,
      description,
      purchasePrice,
      stock,
    });

    await this._productRepository.add(product);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}

export { AddProductUseCase };
