interface AddClientFacadeInputDTO {
  id?: string;
  name: string;
  email: string;
  address: string;
}

interface FindClientFacadeInputDTO {
  clientId: string;
}

interface FindClientFacadeOutputDTO {
  id: string;
  name: string;
  email: string;
  address: string;
}

export {
  AddClientFacadeInputDTO,
  FindClientFacadeInputDTO,
  FindClientFacadeOutputDTO,
};
