import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { ProductEntity } from "../../domain/product.entity";
import { ProductGateway } from "../../gateway/product.gateway";
import { FindProductUseCase } from "./find-product.usecase";

let productRepository: ProductGateway;
let findProductUseCase: UseCaseInterface;

describe("FindProductUseCase unit test", () => {
  beforeEach(() => {
    const product = new ProductEntity({
      id: new Uuid("1"),
      name: "Product 1",
      description: "Product 1 description",
      salesPrice: 100,
    });

    const mockRepository = () => {
      return {
        findAll: jest.fn(),
        findByPk: jest.fn().mockReturnValue(Promise.resolve(product)),
      };
    };

    productRepository = mockRepository();
    findProductUseCase = new FindProductUseCase(productRepository);
  });

  it("should be able to find a unique product by primary key", async () => {
    const product = await findProductUseCase.execute({ productId: "1" });

    expect(productRepository.findByPk).toHaveBeenCalled();
    expect(product.id).toBe("1");
    expect(product.name).toBe("Product 1");
    expect(product.description).toBe("Product 1 description");
    expect(product.salesPrice).toBe(100);
  });
});
