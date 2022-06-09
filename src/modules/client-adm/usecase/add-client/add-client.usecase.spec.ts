import { UseCaseInterface } from "../../../@shared/domain/usecase/use-case.interface";
import { ClientGateway } from "../../gateway/client.gateway";
import { AddClientUseCase } from "./add-client.usecase";

let clientRepository: ClientGateway;
let addClientUseCase: UseCaseInterface;

describe("AddClientUseCase unit test", () => {
  beforeEach(() => {
    const mockRepository = () => {
      return { add: jest.fn(), findByPk: jest.fn() };
    };

    clientRepository = mockRepository();
    addClientUseCase = new AddClientUseCase(clientRepository);
  });

  it("should be able to add a new client", async () => {
    const input = {
      id: "1",
      name: "Client name",
      email: "client@email.com",
      address: "123 Fake Street",
    };

    const client = await addClientUseCase.execute(input);

    expect(clientRepository.add).toHaveBeenCalled();
    expect(client.id).toBe(input.id);
    expect(client.name).toBe(input.name);
    expect(client.email).toBe(input.email);
    expect(client.address).toBe(input.address);
  });
});
