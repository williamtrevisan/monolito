import { UseCaseInterface } from "../../@shared/domain/usecase/use-case.interface";
import {
  AddClientFacadeInputDTO,
  FindClientFacadeInputDTO,
  FindClientFacadeOutputDTO,
} from "./client-adm.facade.dto";
import { ClientAdmFacadeInterface } from "./client-adm.facade.interface";

type ClientAdmFacadeProps = {
  addClientUseCase: UseCaseInterface;
  findClientUseCase: UseCaseInterface;
};

class ClientAdmFacade implements ClientAdmFacadeInterface {
  private _addClientUseCase: UseCaseInterface;
  private _findClientUseCase: UseCaseInterface;

  constructor({ addClientUseCase, findClientUseCase }: ClientAdmFacadeProps) {
    this._addClientUseCase = addClientUseCase;
    this._findClientUseCase = findClientUseCase;
  }

  async addClient(input: AddClientFacadeInputDTO): Promise<void> {
    await this._addClientUseCase.execute(input);
  }

  findClientByPk(
    input: FindClientFacadeInputDTO
  ): Promise<FindClientFacadeOutputDTO> {
    return this._findClientUseCase.execute(input);
  }
}

export { ClientAdmFacade };
