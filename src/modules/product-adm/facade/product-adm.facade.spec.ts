import { Sequelize } from "sequelize-typescript";

import { ProductAdmFacadeFactory } from "../factory/product-adm.facade.factory";
import { ProductModel } from "../infrastructure/sequelize/model/product.model";

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
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to add a new product", async () => {
    const productFacade = ProductAdmFacadeFactory.create();
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

  it("should be able to get a stock of a product", async () => {
    const productFacade = ProductAdmFacadeFactory.create();
    const input = {
      id: "1",
      name: "Product name",
      description: "Product description",
      purchasePrice: 150,
      stock: 35,
    };
    await productFacade.addProduct(input);

    const stockOfProduct = await productFacade.checkStock({ productId: "1" });

    expect(stockOfProduct.productId).toBe("1");
    expect(stockOfProduct.stock).toBe(35);
  });
});
