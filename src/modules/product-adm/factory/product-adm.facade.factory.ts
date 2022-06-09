import { ProductAdmFacade } from "../facade/product-adm.facade";
import { ProductRepository } from "../infrastructure/sequelize/repository/product.repository";
import { AddProductUseCase } from "../usecase/add-product/add-product.usecase";
import { CheckStockUseCase } from "../usecase/check-stock/check-stock.usecase";

class ProductAdmFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();

    const addProductUseCase = new AddProductUseCase(productRepository);
    const checkStockUseCase = new CheckStockUseCase(productRepository);

    return new ProductAdmFacade({
      addProductUseCase,
      checkStockUseCase,
    });
  }
}

export { ProductAdmFacadeFactory };
