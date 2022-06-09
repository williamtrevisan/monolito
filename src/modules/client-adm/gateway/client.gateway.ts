import { Client } from "../domain/client.entity";

interface ClientGateway {
  add(client: Client): Promise<void>;
  findByPk(id: string): Promise<Client>;
}

export { ClientGateway };
