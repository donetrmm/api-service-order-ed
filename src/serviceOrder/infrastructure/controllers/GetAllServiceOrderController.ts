import { Request, Response } from "express";

import { GetAllServiceOrderUseCase } from "../../application/GetAllServiceOrderUseCase";

export class GetAllServiceOrderController {
  constructor(readonly getAllServiceOrderUseCase: GetAllServiceOrderUseCase) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const service = await this.getAllServiceOrderUseCase.run();
      if (service)
        res.status(200).send({
          status: "success",
          data: service.map((service: any) => {
            return {
              id: service.id,
              name: service.name
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema!",
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
