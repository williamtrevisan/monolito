import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { ClientEntity } from "../../domain/client.entity";
import { ClientGateway } from "../../gateway/client.gateway";
import { ClientModel } from "../model/client.model";

class ClientRepository implements ClientGateway {
  async add(client: ClientEntity): Promise<void> {
    await ClientModel.create({
      id: client.id.id,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    });
  }

  async findByPk(id: string): Promise<ClientEntity> {
    const client = await ClientModel.findOne({ where: { id } });
    if (!client) throw new Error(`Client with id ${id} not found`);

    return new ClientEntity({
      id: new Uuid(client.id),
      name: client.name,
      email: client.email,
      address: client.address,
    });
  }
}

export { ClientRepository };
