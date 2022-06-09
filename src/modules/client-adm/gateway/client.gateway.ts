import { ClientEntity } from "../domain/client.entity";

interface ClientGateway {
  add(client: ClientEntity): Promise<void>;
  findByPk(id: string): Promise<ClientEntity>;
}

export { ClientGateway };
