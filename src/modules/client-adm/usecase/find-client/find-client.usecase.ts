import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { ClientGateway } from "../../gateway/client.gateway";
import {
  FindClientInputDTO,
  FindClientOutputDTO,
} from "./find-client.usecase.dto";

class FindClientUseCase implements UseCaseInterface {
  constructor(private readonly _clientRepository: ClientGateway) {}

  async execute({
    clientId,
  }: FindClientInputDTO): Promise<FindClientOutputDTO> {
    const client = await this._clientRepository.findByPk(clientId);

    return {
      id: client.id.id,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    };
  }
}

export { FindClientUseCase };
