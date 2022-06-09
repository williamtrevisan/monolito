interface addClientInputDTO {
  id?: string;
  name: string;
  email: string;
  address: string;
}

interface addClientOutputDTO {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export { addClientInputDTO, addClientOutputDTO };
