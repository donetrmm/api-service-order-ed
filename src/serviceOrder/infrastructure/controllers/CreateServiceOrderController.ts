import { Request, Response } from "express";

import { CreateServiceOrderUseCase } from "../../application/CreateServiceOrderUseCase";

export class CreateServiceOrderController {
  constructor(readonly createServiceOrderUseCase: CreateServiceOrderUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const service = await this.createServiceOrderUseCase.run(
        data.name
      );

      if (service)
        res.status(201).send({
          status: "success",
          data: {
            id: service?.id,
            name: service?.name
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "No fue posible agregar el registro!",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error!",
        msn: error,
      });
    }
  }
}
