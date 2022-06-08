import { Sequelize } from "sequelize-typescript";

import { Uuid } from "../../../../@shared/domain/value-object/uuid.value-object";
import { ProductEntity } from "../../../domain/product.entity";
import { ProductGateway } from "../../../gateway/product.gateway";
import { ProductModel } from "../model/product.model";
import { ProductRepository } from "./product.repository";

let productRepository: ProductGateway;

describe("ProductRepository test", () => {
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
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to add a new product", async () => {
    const productEntity = new ProductEntity({
      name: "Product name",
      description: "Product description",
      purchasePrice: 175,
      stock: 5,
    });

    await productRepository.add(productEntity);
    const productDatabase = await ProductModel.findOne({
      where: { id: productEntity.id.id },
    });

    expect(productEntity.id.id).toEqual(productDatabase.id);
    expect(productEntity.name).toEqual(productDatabase.name);
    expect(productEntity.description).toEqual(productDatabase.description);
    expect(productEntity.purchasePrice).toEqual(productDatabase.purchasePrice);
    expect(productEntity.stock).toEqual(productDatabase.stock);
    expect(productEntity.createdAt).toStrictEqual(productDatabase.createdAt);
    expect(productEntity.updatedAt).toStrictEqual(productDatabase.updatedAt);
  });

  it("should be able to find a product by primary key", async () => {
    const productEntity = new ProductEntity({
      id: new Uuid("1"),
      name: "Product name",
      description: "Product description",
      purchasePrice: 175,
      stock: 5,
    });
    await productRepository.add(productEntity);

    const productDatabase = await productRepository.findByPk(
      productEntity.id.id
    );

    expect(productEntity.id.id).toEqual("1");
    expect(productEntity.name).toEqual(productDatabase.name);
    expect(productEntity.description).toEqual(productDatabase.description);
    expect(productEntity.purchasePrice).toEqual(productDatabase.purchasePrice);
    expect(productEntity.stock).toEqual(productDatabase.stock);
  });
});
