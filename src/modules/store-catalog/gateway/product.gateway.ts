import { ProductEntity } from "../../product-adm/domain/product.entity";

interface ProductGateway {
  findAll(): Promise<ProductEntity[]>;
  findByPk(id: string): Promise<ProductEntity>;
}

export { ProductGateway };
