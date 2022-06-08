import { Uuid } from "../../../../@shared/domain/value-object/uuid.value-object";
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

  async findByPk(id: string): Promise<ProductEntity> {
    const product = await ProductModel.findOne({ where: { id } });
    if (!product) throw new Error(`Product with id ${id} not found`);

    return new ProductEntity({
      id: new Uuid(product.id),
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  }
}

export { ProductRepository };
