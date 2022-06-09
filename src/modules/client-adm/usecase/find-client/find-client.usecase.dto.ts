interface FindClientInputDTO {
  clientId: string;
}

interface FindClientOutputDTO {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export { FindClientInputDTO, FindClientOutputDTO };
