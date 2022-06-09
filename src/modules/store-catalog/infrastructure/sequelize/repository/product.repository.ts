import { Uuid } from "../../../../@shared/domain/value-object/uuid.value-object";
import { ProductEntity } from "../../../domain/product.entity";
import { ProductGateway } from "../../../gateway/product.gateway";
import { ProductModel } from "../model/product.model";

class ProductRepository implements ProductGateway {
  async findAll(): Promise<ProductEntity[]> {
    const products = await ProductModel.findAll();

    return products.map(
      (product) =>
        new ProductEntity({
          id: new Uuid(product.id),
          name: product.name,
          description: product.description,
          salesPrice: product.salesPrice,
        })
    );
  }

  async findByPk(productId: string): Promise<ProductEntity> {
    const product = await ProductModel.findOne({ where: { id: productId } });

    return new ProductEntity({
      id: new Uuid(product.id),
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    });
  }
}

export { ProductRepository };
