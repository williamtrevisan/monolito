import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { ProductEntity } from "../../domain/product.entity";
import { ProductGateway } from "../../gateway/product.gateway";
import { FindAllProductsUseCase } from "./find-all-products.usecase";

let productRepository: ProductGateway;
let findAllProductsUseCase: UseCaseInterface;

describe("FindAllProductsUseCase unit test", () => {
  beforeEach(() => {
    const product1 = new ProductEntity({
      id: new Uuid("1"),
      name: "Product 1",
      description: "Product 1 description",
      salesPrice: 100,
    });
    const product2 = new ProductEntity({
      id: new Uuid("2"),
      name: "Product 2",
      description: "Product 2 description",
      salesPrice: 135,
    });

    const mockRepository = () => {
      return {
        findAll: jest
          .fn()
          .mockReturnValue(Promise.resolve([product1, product2])),
        findByPk: jest.fn(),
      };
    };

    productRepository = mockRepository();
    findAllProductsUseCase = new FindAllProductsUseCase(productRepository);
  });

  it("should be able to find all product", async () => {
    const { products } = await findAllProductsUseCase.execute({});

    expect(productRepository.findAll).toHaveBeenCalled();
    expect(products).toHaveLength(2);
    expect(products[0].id).toBe("1");
    expect(products[0].name).toBe("Product 1");
    expect(products[0].description).toBe("Product 1 description");
    expect(products[0].salesPrice).toBe(100);
    expect(products[1].id).toBe("2");
    expect(products[1].name).toBe("Product 2");
    expect(products[1].description).toBe("Product 2 description");
    expect(products[1].salesPrice).toBe(135);
  });
});
