import amqp from "amqplib";
import express from "express";

const config = {
  protocol: "amqp",
  hostname: "54.209.207.245",
  port: 5672,
  username: "alilopez",
  password: "123456",
};

export const loadRouter = express.Router();

loadRouter.get("/", async function loadEvent(req, res) {
  const conn = await amqp.connect(config);
  console.log("Conexión exitosa");
  const channel = await conn.createChannel();
  console.log("Canal creado exitosamente");
  await channel.sendToQueue("InitialEvent", Buffer.from("Mensaje"));
  console.log("Mensaje enviado");
  await channel.close();
  await conn.close();
  res.status(200).send("OK");
});
