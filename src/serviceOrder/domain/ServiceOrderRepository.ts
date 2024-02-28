import { ServiceOrder } from "./ServiceOrder";

export interface ServiceOrderRepository {
  getAll(): Promise<ServiceOrder[] | null>;
  getById(userId: number): Promise<ServiceOrder | null>;
  createServiceOrder(serviceOrder: ServiceOrder): Promise<ServiceOrder | null>;
}
