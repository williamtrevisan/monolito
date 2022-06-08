/* eslint-disable @typescript-eslint/no-explicit-any */
interface UseCaseInterface {
  execute(input: any): Promise<any>;
}

export { UseCaseInterface };
