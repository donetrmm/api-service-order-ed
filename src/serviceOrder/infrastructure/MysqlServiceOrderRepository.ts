import { query } from "../../database/mysql";
import { ServiceOrder } from "../domain/ServiceOrder";
import { ServiceOrderRepository } from "../domain/ServiceOrderRepository";

export class MysqlServiceOrderRepository implements ServiceOrderRepository {
  async getAll(): Promise<ServiceOrder[] | null> {
    const sql = "SELECT * FROM serviceOrder";
    try {
      const [data]: any = await query(sql, []);
      const dataServiceOrder = Object.values(JSON.parse(JSON.stringify(data)));

      return dataServiceOrder.map(
        (serviceOrder: any) =>
          new ServiceOrder(
            serviceOrder.id,
            serviceOrder.name
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<ServiceOrder | null> {
    const sql = "SELECT * FROM serviceOrder WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);

      return new ServiceOrder(
        result[0].id,
        result[0].name
      );
    } catch (error) {
      return null;
    }
  }

  async createServiceOrder(service: ServiceOrder): Promise<ServiceOrder | null> {
    let serviceOrder = null;
    const sql =
      "INSERT INTO serviceOrder (name) VALUES (?)";
    const params: any[] = [service.name];
    try {
      const [result]: any = await query(sql, params);
      serviceOrder = new ServiceOrder(
        result.insertId,
        service.name
      );
    } catch (error) {
      serviceOrder = null;
    } finally {
      return serviceOrder;
    }
  }
}
