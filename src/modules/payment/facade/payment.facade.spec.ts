import { Sequelize } from "sequelize-typescript";

import { PaymentFacadeFactory } from "../factory/payment.facade.factory";
import { TransactionModel } from "../infrastructure/sequelize/model/transaction.model";

let sequelize: Sequelize;

describe("StoreCatalogFacade test", () => {
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([TransactionModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to save a new transaction", async () => {
    // const transactionRepository = new TransactionRepository();
    // const processPaymentUseCase = new ProcessPaymentUseCase(
    //   transactionRepository
    // );
    // const paymentFacade = new PaymentFacade(processPaymentUseCase);
    const paymentFacade = PaymentFacadeFactory.create();

    const transaction = await paymentFacade.save({
      orderId: "orderId",
      amount: 100,
    });

    expect(transaction.id).toBeDefined();
    expect(transaction.orderId).toEqual("orderId");
    expect(transaction.amount).toEqual(100);
    expect(transaction.status).toEqual("approved");
    expect(transaction.createdAt).toBeDefined();
    expect(transaction.updatedAt).toBeDefined();
  });
});
