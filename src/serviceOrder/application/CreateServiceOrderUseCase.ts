import { ServiceOrder } from "../domain/ServiceOrder";
import { ServiceOrderRepository } from "../domain/ServiceOrderRepository";
import { NotificationServiceOrderUseCase } from "./Services/NotificationNewServiceOrder";

export class CreateServiceOrderUseCase {
  constructor(
    readonly serviceOrderRepository: ServiceOrderRepository,
    readonly sendNotification: NotificationServiceOrderUseCase
  ) {}

  async run(
    name: string,
  ): Promise<ServiceOrder | null> {
    const service = new ServiceOrder(0, name);
    try {
      const product = await this.serviceOrderRepository.createServiceOrder(service);
      if (product)
        this.sendNotification.run(product);
      return product;
    } catch (error) {
      return null;
    }
  }
}
