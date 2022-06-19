interface PaymentFacadeInputDTO {
  orderId: string;
  amount: number;
}

interface PaymentFacadeOutputDTO {
  id: string;
  orderId: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export { PaymentFacadeInputDTO, PaymentFacadeOutputDTO };
