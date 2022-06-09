import {
  AddClientFacadeInputDTO,
  FindClientFacadeInputDTO,
  FindClientFacadeOutputDTO,
} from "./client-adm.facade.dto";

interface ClientAdmFacadeInterface {
  addClient(input: AddClientFacadeInputDTO): Promise<void>;
  findClientByPk(
    input: FindClientFacadeInputDTO
  ): Promise<FindClientFacadeOutputDTO>;
}

export { ClientAdmFacadeInterface };
