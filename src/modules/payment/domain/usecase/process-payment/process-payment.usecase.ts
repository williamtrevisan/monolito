import { UseCaseInterface } from "../../../../@shared/domain/usecase/use-case.interface";
import { TransactionEntity } from "../../entity/transaction.entity";
import { TransactionGateway } from "../../gateway/transaction.gateway";
import {
  ProcessPaymentInputDTO,
  ProcessPaymentOutputDTO,
} from "./process-payment.usecase.dto";

class ProcessPaymentUseCase implements UseCaseInterface {
  constructor(private readonly transactionRepository: TransactionGateway) {}

  async execute({
    orderId,
    amount,
  }: ProcessPaymentInputDTO): Promise<ProcessPaymentOutputDTO> {
    const transaction = new TransactionEntity({ orderId, amount });
    transaction.process();

    const persistTransaction = await this.transactionRepository.save(
      transaction
    );

    return {
      id: persistTransaction.id.id,
      orderId: persistTransaction.orderId,
      amount: persistTransaction.amount,
      status: persistTransaction.status,
      createdAt: persistTransaction.createdAt,
      updatedAt: persistTransaction.updatedAt,
    };
  }
}

export { ProcessPaymentUseCase };
