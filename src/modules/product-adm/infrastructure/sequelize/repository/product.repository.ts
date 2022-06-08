import { ProductEntity } from "../../../domain/product.entity";
import { ProductGateway } from "../../../gateway/product.gateway";
import { ProductModel } from "../model/product.model";

class ProductRepository implements ProductGateway {
  async add(product: ProductEntity): Promise<void> {
    await ProductModel.create({
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  }

  findByPk(id: string): Promise<ProductEntity> {
    throw new Error("Method not implemented.");
  }
}

export { ProductRepository };
