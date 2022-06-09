import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { Uuid } from "../../../@shared/domain/value-object/uuid.value-object";
import { ClientEntity } from "../../domain/client.entity";
import { ClientGateway } from "../../gateway/client.gateway";
import { FindClientUseCase } from "./find-client.usecase";

let client1: ClientEntity;
let clientRepository: ClientGateway;
let findClientUseCase: UseCaseInterface;

describe("FindClientUseCase unit test", () => {
  beforeEach(() => {
    client1 = new ClientEntity({
      id: new Uuid("1"),
      name: "Client name",
      email: "client@email.com",
      address: "123 Fake Street",
    });
    const mockRepository = () => {
      return {
        add: jest.fn(),
        findByPk: jest.fn().mockReturnValue(Promise.resolve(client1)),
      };
    };

    clientRepository = mockRepository();
    findClientUseCase = new FindClientUseCase(clientRepository);
  });

  it("should be able to find a client by primary key", async () => {
    const client = await findClientUseCase.execute({ clientId: client1.id.id });

    expect(clientRepository.findByPk).toHaveBeenCalled();
    expect(client.id).toEqual(client1.id.id);
    expect(client.name).toEqual(client1.name);
    expect(client.email).toEqual(client1.email);
    expect(client.address).toEqual(client1.address);
    expect(client.createdAt).toStrictEqual(client1.createdAt);
    expect(client.updatedAt).toStrictEqual(client1.updatedAt);
  });
});
