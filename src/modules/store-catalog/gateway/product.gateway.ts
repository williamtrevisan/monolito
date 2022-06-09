import { ProductEntity } from "../domain/product.entity";

interface ProductGateway {
  findAll(): Promise<ProductEntity[]>;
  findByPk(productId: string): Promise<ProductEntity>;
}

export { ProductGateway };
