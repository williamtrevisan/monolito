import { ProductGateway } from "../../gateway/product.gateway";

let productRepository: ProductGateway;
let addProductUseCase: AddProductUseCase;

describe("AddProductUseCase unit test", () => {
  beforeEach(() => {
    productRepository = (() => {
      return {
        add: jest.fn(),
        findByPk: jest.fn(),
      };
    })();
    addProductUseCase = new AddProductUseCase(productRepository);
  });

  it("should add a new product", async () => {
    const input = {
      name: "Product name",
      description: "Product description",
      purchasePrice: 150,
      stock: 15,
    };

    await addProductUseCase.execute(input);
  });
});
