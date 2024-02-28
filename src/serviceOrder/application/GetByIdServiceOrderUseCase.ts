import { ServiceOrder } from "../domain/ServiceOrder";
import { ServiceOrderRepository } from "../domain/ServiceOrderRepository";

export class GetByIdServiceOrderUseCase {
  constructor(readonly serviceOrderRepository: ServiceOrderRepository) {}

  async run(id: number): Promise<ServiceOrder | null> {
    try {
      const result = await this.serviceOrderRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
