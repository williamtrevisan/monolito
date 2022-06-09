import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { ClientEntity } from "../../domain/client.entity";
import { ClientGateway } from "../../gateway/client.gateway";
import {
  AddClientInputDTO,
  AddClientOutputDTO,
} from "./add-client.usecase.dto";

class AddClientUseCase implements UseCaseInterface {
  constructor(private readonly _clientRepository: ClientGateway) {}

  async execute({
    id,
    name,
    email,
    address,
  }: AddClientInputDTO): Promise<AddClientOutputDTO> {
    const client = new ClientEntity({
      id: new Uuid(id),
      name,
      email,
      address,
    });

    await this._clientRepository.add(client);

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

export { AddClientUseCase };
