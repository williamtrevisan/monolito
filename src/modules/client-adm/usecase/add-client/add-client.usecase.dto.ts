interface AddClientInputDTO {
  id?: string;
  name: string;
  email: string;
  address: string;
}

interface AddClientOutputDTO {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export { AddClientInputDTO, AddClientOutputDTO };
