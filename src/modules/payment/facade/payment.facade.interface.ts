import {
  PaymentFacadeInputDTO,
  PaymentFacadeOutputDTO,
} from "./payment.facade.dto";

interface PaymentFacadeInterface {
  save(input: PaymentFacadeInputDTO): Promise<PaymentFacadeOutputDTO>;
}

export { PaymentFacadeInterface };
