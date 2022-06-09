import { StoreCatalogFacade } from "../facade/store-catalog.facace";
import { ProductRepository } from "../infrastructure/sequelize/repository/product.repository";
import { FindAllProductsUseCase } from "../usecase/find-all-products/find-all-products.usecase";
import { FindProductUseCase } from "../usecase/find-product/find-product.usecase";

class StoreCatalogFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();

    const findAllProductsUseCase = new FindAllProductsUseCase(
      productRepository
    );
    const findProductUseCase = new FindProductUseCase(productRepository);

    return new StoreCatalogFacade({
      findAllProductsUseCase,
      findProductUseCase,
    });
  }
}

export { StoreCatalogFacadeFactory };
