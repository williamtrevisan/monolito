import { ProductGateway } from "../../gateway/product.gateway";
import { AddProductUseCase } from "./add-product.usecase";

let productRepository: ProductGateway;
let addProductUseCase: AddProductUseCase;

describe("AddProductUseCase unit test", () => {
  beforeEach(() => {
    const mockRepository = () => {
      return { add: jest.fn(), findByPk: jest.fn() };
    };

    productRepository = mockRepository();
    addProductUseCase = new AddProductUseCase(productRepository);
  });

  it("should be able to add a new product", async () => {
    const input = {
      name: "Product name",
      description: "Product description",
      purchasePrice: 150,
      stock: 15,
    };

    const product = await addProductUseCase.execute(input);

    expect(productRepository.add).toHaveBeenCalled();
    expect(product.id).toBeDefined();
    expect(product.name).toBe(input.name);
    expect(product.description).toBe(input.description);
    expect(product.purchasePrice).toBe(input.purchasePrice);
    expect(product.stock).toBe(input.stock);
  });
});
