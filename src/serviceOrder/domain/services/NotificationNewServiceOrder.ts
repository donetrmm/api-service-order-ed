import { ServiceOrder } from "../ServiceOrder";

export interface NotificationNewServiceOrder {
  sendNotification(serviceOrder: ServiceOrder): Promise<boolean>;
}
