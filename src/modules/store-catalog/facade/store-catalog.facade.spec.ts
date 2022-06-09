import { Sequelize } from "sequelize-typescript";

import { ProductModel } from "../infrastructure/sequelize/model/product.model";

let sequelize: Sequelize;

describe("StoreCatalogFacade test", () => {
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

  it("should be able to find all products", async () => {
    const storeCatalogFacade = StoreCatalogFacadeFactory.create();
    await ProductModel.create({
      id: "1",
      name: "Product 1 name",
      description: "Product 1 description",
      salesPrice: 147,
    });
    await ProductModel.create({
      id: "2",
      name: "Product 2 name",
      description: "Product 2 description",
      salesPrice: 184,
    });

    const { products } = await storeCatalogFacade.findAll();

    expect(products).toHaveLength(2);
    expect(products[0].id.id).toEqual("1");
    expect(products[0].name).toEqual("Product 1 name");
    expect(products[0].description).toEqual("Product 1 description");
    expect(products[0].salesPrice).toEqual(147);
    expect(products[1].id.id).toEqual("2");
    expect(products[1].name).toEqual("Product 2 name");
    expect(products[1].description).toEqual("Product 2 description");
    expect(products[1].salesPrice).toEqual(184);
  });

  it("should be able to find a unique product by primary key", async () => {
    const storeCatalogFacade = StoreCatalogFacadeFactory.create();
    await ProductModel.create({
      id: "1",
      name: "Product 1 name",
      description: "Product 1 description",
      salesPrice: 147,
    });

    const product = await storeCatalogFacade.findByPk({ productId: "1" });

    expect(product.id.id).toEqual("1");
    expect(product.name).toEqual("Product 1 name");
    expect(product.description).toEqual("Product 1 description");
    expect(product.salesPrice).toEqual(147);
  });
});
