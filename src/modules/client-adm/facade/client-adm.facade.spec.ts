import { Sequelize } from "sequelize-typescript";

import { ClientAdmFacadeFactory } from "../factory/client-adm.facade.factory";
import { ClientModel } from "../infrastructure/model/client.model";

let sequelize: Sequelize;

describe("ClientAdmFacade test", () => {
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ClientModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to add a new client", async () => {
    const clientFacade = ClientAdmFacadeFactory.create();
    const input = {
      id: "1",
      name: "Client name",
      email: "client@email.com",
      address: "123 Fake Street",
    };

    await clientFacade.addClient(input);
    const client = await ClientModel.findOne({ where: { id: "1" } });

    expect(client).toBeDefined();
    expect(client.id).toBe("1");
    expect(client.name).toBe(input.name);
    expect(client.email).toBe(input.email);
    expect(client.address).toBe(input.address);
  });

  it("should be able to get a stock of a client", async () => {
    const clientFacade = ClientAdmFacadeFactory.create();
    const input = {
      id: "1",
      name: "Client name",
      email: "client@email.com",
      address: "123 Fake Street",
    };
    await clientFacade.addClient(input);

    const client = await clientFacade.findClientByPk({ clientId: "1" });

    expect(client).toBeDefined();
    expect(client.id).toBe(input.id);
    expect(client.name).toBe(input.name);
    expect(client.email).toBe(input.email);
    expect(client.address).toBe(input.address);
  });
});
