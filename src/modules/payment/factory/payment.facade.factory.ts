import { PaymentFacade } from "../facade/payment.facade";
import { TransactionRepository } from "../infrastructure/sequelize/repository/transaction.repository";
import { ProcessPaymentUseCase } from "../usecase/process-payment/process-payment.usecase";

class PaymentFacadeFactory {
  static create() {
    const transactionRepository = new TransactionRepository();

    const processPaymentUseCase = new ProcessPaymentUseCase(
      transactionRepository
    );

    return new PaymentFacade(processPaymentUseCase);
  }
}

export { PaymentFacadeFactory };
