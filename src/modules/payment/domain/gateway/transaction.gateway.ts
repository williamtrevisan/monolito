import { TransactionEntity } from "../entity/transaction.entity";

interface TransactionGateway {
  save(input: TransactionEntity): Promise<TransactionEntity>;
}

export { TransactionGateway };
