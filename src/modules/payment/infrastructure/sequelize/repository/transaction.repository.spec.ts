import { Sequelize } from "sequelize-typescript";

import { Uuid } from "../../../../@shared/domain/value-object/uuid.value-object";
import { TransactionEntity } from "../../../domain/entity/transaction.entity";
import { TransactionStatus } from "../../../enum/transaction-status.enum";
import { TransactionGateway } from "../../../gateway/transaction.gateway";
import { TransactionModel } from "../model/transaction.model";
import { TransactionRepository } from "./transaction.repository";

let transactionRepository: TransactionGateway;
let sequelize: Sequelize;

describe("ProductRepository test", () => {
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([TransactionModel]);

    await sequelize.sync();

    transactionRepository = new TransactionRepository();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to save a new transaction", async () => {
    const transactionEntity = new TransactionEntity({
      id: new Uuid("1"),
      orderId: "orderId",
      amount: 100,
    });
    transactionEntity.process();

    const transaction = await transactionRepository.save(transactionEntity);

    expect(transaction.id).toEqual(transactionEntity.id);
    expect(transaction.orderId).toEqual(transactionEntity.orderId);
    expect(transaction.amount).toEqual(transactionEntity.amount);
    expect(transaction.status).toEqual(TransactionStatus.APPROVED);
  });
});
