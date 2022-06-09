import { Sequelize } from "sequelize-typescript";

import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { ClientEntity } from "../../domain/client.entity";
import { ClientGateway } from "../../gateway/client.gateway";
import { ClientModel } from "../model/client.model";
import { ClientRepository } from "./client.repository";

let clientRepository: ClientGateway;
let sequelize: Sequelize;

describe("ClientRepository test", () => {
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ClientModel]);

    await sequelize.sync();

    clientRepository = new ClientRepository();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to add a new client", async () => {
    const clientEntity = new ClientEntity({
      name: "Client name",
      email: "client@email.com",
      address: "123 Fake Street",
    });

    await clientRepository.add(clientEntity);
    const clientDatabase = await ClientModel.findOne({
      where: { id: clientEntity.id.id },
    });

    expect(clientEntity.id.id).toEqual(clientDatabase.id);
    expect(clientEntity.name).toEqual(clientDatabase.name);
    expect(clientEntity.email).toEqual(clientDatabase.email);
    expect(clientEntity.address).toEqual(clientDatabase.address);
    expect(clientEntity.createdAt).toStrictEqual(clientDatabase.createdAt);
    expect(clientEntity.updatedAt).toStrictEqual(clientDatabase.updatedAt);
  });

  it("should be able to find a client by primary key", async () => {
    const clientEntity = new ClientEntity({
      id: new Uuid("1"),
      name: "Client name",
      email: "client@email.com",
      address: "123 Fake Street",
    });
    await clientRepository.add(clientEntity);

    const clientDatabase = await clientRepository.findByPk(clientEntity.id.id);

    expect(clientEntity.id.id).toEqual("1");
    expect(clientEntity.name).toEqual(clientDatabase.name);
    expect(clientEntity.email).toEqual(clientDatabase.email);
    expect(clientEntity.address).toEqual(clientDatabase.address);
  });
});
