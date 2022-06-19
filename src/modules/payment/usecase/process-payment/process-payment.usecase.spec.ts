import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { TransactionEntity } from "../../domain/entity/transaction.entity";
import { TransactionStatus } from "../../enum/transaction-status.enum";
import { TransactionGateway } from "../../gateway/transaction.gateway";
import { ProcessPaymentUseCase } from "./process-payment.usecase";

let transactionApprovedRepository: TransactionGateway;
let transactionRejectedRepository: TransactionGateway;
let processPaymentUseCase: UseCaseInterface;

describe("FindAllProductsUseCase unit test", () => {
  beforeEach(() => {
    const transactionApproved = new TransactionEntity({
      id: new Uuid("1"),
      orderId: "orderId",
      amount: 100,
      status: TransactionStatus.APPROVED,
    });
    const transactionRejected = new TransactionEntity({
      id: new Uuid("1"),
      orderId: "orderId",
      amount: 99,
      status: TransactionStatus.REJECTED,
    });

    const mockRepositoryApproved = () => {
      return {
        save: jest.fn().mockReturnValue(Promise.resolve(transactionApproved)),
      };
    };
    const mockRepositoryRejected = () => {
      return {
        save: jest.fn().mockReturnValue(Promise.resolve(transactionRejected)),
      };
    };

    transactionApprovedRepository = mockRepositoryApproved();
    transactionRejectedRepository = mockRepositoryRejected();
  });

  it("should be approve transaction", async () => {
    processPaymentUseCase = new ProcessPaymentUseCase(
      transactionApprovedRepository
    );

    const transaction = await processPaymentUseCase.execute({
      orderId: "orderId",
      amount: 100,
    });

    expect(transaction.id).toBe("1");
    expect(transaction.orderId).toBe("orderId");
    expect(transaction.amount).toBe(100);
    expect(transaction.status).toBe("approved");
  });

  it("should be reject a transaction", async () => {
    processPaymentUseCase = new ProcessPaymentUseCase(
      transactionRejectedRepository
    );

    const transaction = await processPaymentUseCase.execute({
      orderId: "orderId",
      amount: 99,
    });

    expect(transaction.id).toBe("1");
    expect(transaction.orderId).toBe("orderId");
    expect(transaction.amount).toBe(99);
    expect(transaction.status).toBe("rejected");
  });
});
