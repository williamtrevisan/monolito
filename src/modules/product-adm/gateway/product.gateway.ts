import { ProductEntity } from "../domain/product.entity";

interface ProductGateway {
  add(product: ProductEntity): Promise<void>;
  findByPk(id: string): Promise<ProductEntity>;
}

export { ProductGateway };
