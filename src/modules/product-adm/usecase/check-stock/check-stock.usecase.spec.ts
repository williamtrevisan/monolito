import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { ProductEntity } from "../../domain/product.entity";
import { ProductGateway } from "../../gateway/product.gateway";
import { CheckStockUseCase } from "./check-stock.usecase";

let productRepository: ProductGateway;
let checkStockUseCase: UseCaseInterface;

describe("CheckStockUseCase unit test", () => {
  beforeEach(() => {
    const product = new ProductEntity({
      id: new Uuid("1"),
      name: "Product name",
      description: "Product description",
      purchasePrice: 150,
      stock: 15,
    });
    const mockRepository = () => {
      return {
        add: jest.fn(),
        findByPk: jest.fn().mockReturnValue(Promise.resolve(product)),
      };
    };

    productRepository = mockRepository();
    checkStockUseCase = new CheckStockUseCase(productRepository);
  });

  it("should be able to get a stock of a product", async () => {
    const input = { productId: "1" };

    const stockOfProduct = await checkStockUseCase.execute(input);

    expect(productRepository.findByPk).toHaveBeenCalled();
    expect(stockOfProduct.productId).toBe("1");
    expect(stockOfProduct.stock).toBe(15);
  });
});
