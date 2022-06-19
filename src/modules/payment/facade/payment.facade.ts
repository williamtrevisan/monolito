import { UseCaseInterface } from "../../@shared/domain/usecase/use-case.interface";
import {
  PaymentFacadeInputDTO,
  PaymentFacadeOutputDTO,
} from "./payment.facade.dto";
import { PaymentFacadeInterface } from "./payment.facade.interface";

class PaymentFacade implements PaymentFacadeInterface {
  constructor(private readonly _processPaymentUseCase: UseCaseInterface) {}

  save({
    orderId,
    amount,
  }: PaymentFacadeInputDTO): Promise<PaymentFacadeOutputDTO> {
    return this._processPaymentUseCase.execute({ orderId, amount });
  }
}

export { PaymentFacade };
