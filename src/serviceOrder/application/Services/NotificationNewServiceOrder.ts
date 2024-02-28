import { ServiceOrder } from "../../domain/ServiceOrder";
import { NotificationNewServiceO } from "../../infrastructure/servicesRabbitMQ/NotificationNewServiceOrder";

export class NotificationServiceOrderUseCase {
  constructor(readonly serviceNotifiacion: NotificationNewServiceO) {}

  async run(serviceOrder: ServiceOrder) {
    await this.serviceNotifiacion.sendNotification(serviceOrder);
  }
}
