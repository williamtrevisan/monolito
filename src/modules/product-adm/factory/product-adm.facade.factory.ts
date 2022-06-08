import { ProductAdmFacade } from "../facade/product-adm.facade";
import { ProductRepository } from "../infrastructure/sequelize/repository/product.repository";
import { AddProductUseCase } from "../usecase/add-product/add-product.usecase";

class ProductAdmFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();

    const addProductUseCase = new AddProductUseCase(productRepository);

    return new ProductAdmFacade({
      addProductUseCase,
      checkStockUseCase: undefined,
    });
  }
}

export { ProductAdmFacadeFactory };
