interface ProcessPaymentInputDTO {
  orderId: string;
  amount: number;
}

interface ProcessPaymentOutputDTO {
  id: string;
  orderId: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export { ProcessPaymentInputDTO, ProcessPaymentOutputDTO };
