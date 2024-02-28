import { CreateServiceOrderUseCase } from "../application/CreateServiceOrderUseCase";
import { GetAllServiceOrderUseCase } from "../application/GetAllServiceOrderUseCase";
import { GetByIdServiceOrderUseCase } from "../application/GetByIdServiceOrderUseCase";
import { NotificationServiceOrderUseCase } from "../application/Services/NotificationNewServiceOrder";
import { CreateServiceOrderController } from "./controllers/CreateServiceOrderController";
import { GetAllServiceOrderController } from "./controllers/GetAllServiceOrderController";
import { GetByIdServiceOrderController } from "./controllers/GetByIdServiceOrderController";
import { EncryptService } from "./helpers/EncryptService";
import { MysqlServiceOrderRepository } from "./MysqlServiceOrderRepository";
import { NotificationNewServiceO } from "./servicesRabbitMQ/NotificationNewServiceOrder";

export const mysqlServiceOrderRepository = new MysqlServiceOrderRepository();
export const servicesNotification = new NotificationNewServiceO();
export const encryptPassword = new EncryptService();
export const serviceNotificationUseCase = new NotificationServiceOrderUseCase(
  servicesNotification
);
export const createServiceOrderUseCase = new CreateServiceOrderUseCase(
  mysqlServiceOrderRepository,
  serviceNotificationUseCase
);
export const getAllUseCase = new GetAllServiceOrderUseCase(mysqlServiceOrderRepository);
export const getByIdServiceOrderUseCase = new GetByIdServiceOrderUseCase(
  mysqlServiceOrderRepository
);
export const createServiceOrderController = new CreateServiceOrderController(
  createServiceOrderUseCase
);
export const getAllServiceOrderController = new GetAllServiceOrderController(
  getAllUseCase
);
export const getByIdServiceOrderController = new GetByIdServiceOrderController(
  getByIdServiceOrderUseCase
);
