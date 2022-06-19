import { TransactionEntity } from "../../../domain/entity/transaction.entity";
import { TransactionGateway } from "../../../gateway/transaction.gateway";
import { TransactionModel } from "../model/transaction.model";

class TransactionRepository implements TransactionGateway {
  async save({
    id,
    orderId,
    amount,
    status,
    createdAt,
    updatedAt,
  }: TransactionEntity): Promise<TransactionEntity> {
    await TransactionModel.create({
      id: id.id,
      orderId,
      amount,
      status,
      createdAt,
      updatedAt,
    });

    return new TransactionEntity({
      id,
      orderId,
      amount,
      status,
      createdAt,
      updatedAt,
    });
  }
}

export { TransactionRepository };
