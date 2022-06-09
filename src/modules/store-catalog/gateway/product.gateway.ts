import { ProductEntity } from "../domain/product.entity";

interface ProductGateway {
  findAll(): Promise<ProductEntity[]>;
  findByPk(id: string): Promise<ProductEntity>;
}

export { ProductGateway };
