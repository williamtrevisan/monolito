import { Sequelize } from "sequelize-typescript";

import { UseCaseInterface } from "../../@shared/domain/usecase/use-case.interface";
import { ProductGateway } from "../gateway/product.gateway";
import { ProductModel } from "../infrastructure/sequelize/model/product.model";
import { ProductRepository } from "../infrastructure/sequelize/repository/product.repository";
import { AddProductUseCase } from "../usecase/add-product/add-product.usecase";
import { ProductAdmFacade } from "./product-adm.facade";

let productRepository: ProductGateway;
let addProductUseCase: UseCaseInterface;

describe("ProductAdmFacade test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);

    await sequelize.sync();

    productRepository = new ProductRepository();
    addProductUseCase = new AddProductUseCase(productRepository);
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to add a new product", async () => {
    const productFacade = new ProductAdmFacade({
      addProductUseCase,
      checkStockUseCase: undefined,
    });
    const input = {
      id: "1",
      name: "Product name",
      description: "Product description",
      purchasePrice: 150,
      stock: 15,
    };

    await productFacade.addProduct(input);
    const product = await ProductModel.findOne({ where: { id: "1" } });

    expect(product).toBeDefined();
    expect(product.id).toBe("1");
    expect(product.name).toBe(input.name);
    expect(product.description).toBe(input.description);
    expect(product.purchasePrice).toBe(input.purchasePrice);
    expect(product.stock).toBe(input.stock);
  });
});
