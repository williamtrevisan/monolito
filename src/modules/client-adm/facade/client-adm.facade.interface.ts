import {
  AddClientFacadeInputDTO,
  FindClientFacadeInputDTO,
  FindClientFacadeOutputDTO,
} from "./client-adm.facade.dto";

interface ClientAdmFacadeInterface {
  add(input: AddClientFacadeInputDTO): Promise<void>;
  findByPk(input: FindClientFacadeInputDTO): Promise<FindClientFacadeOutputDTO>;
}

export { ClientAdmFacadeInterface };
