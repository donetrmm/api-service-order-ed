import amqplib from "amqplib";

import { ServiceOrder } from "../../domain/ServiceOrder";
import { NotificationNewServiceOrder } from "../../domain/services/NotificationNewServiceOrder";

export class NotificationNewServiceO implements NotificationNewServiceOrder {
  private options: any;
  private url: any;
  private exch: any;

  constructor() {
    this.options = {
      vhost: process.env.AMQP_VHOST,
      username: process.env.AMQP_USERNAME,
      password: process.env.AMQP_PASSWORD,
      port: process.env.AMQP_PORT,
    };
    this.url = process.env.AMQP_URL;
    this.exch = process.env.AMQP_EXCH;
    //Options solo para cloudamqp
    //this.server = process.env.AMQP_SERVER;
  }

  async sendNotification(serviceOrder: ServiceOrder): Promise<boolean> {
    //Opción de conexión para instancia EC2
    const conn = await amqplib.connect(this.url, this.options);
    //Opción de conexión para cloudamqp
    //const conn  = await amqplib.connect(this.server);
    const serviceOrderJSON = JSON.stringify(serviceOrder);

    const ch = await conn.createChannel();
    const status = await ch.publish(this.exch, "", Buffer.from(serviceOrderJSON));
    return status;
  }
}
