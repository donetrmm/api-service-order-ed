import { ServiceOrder } from "../domain/ServiceOrder";
import { ServiceOrderRepository } from "../domain/ServiceOrderRepository";

export class GetAllServiceOrderUseCase {
  constructor(readonly serviceOrderRepository: ServiceOrderRepository) {}

  async run(): Promise<ServiceOrder[] | null> {
    try {
      const result = await this.serviceOrderRepository.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}
