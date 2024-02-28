import { Request, Response } from "express";

import { GetByIdServiceOrderUseCase } from "../../application/GetByIdServiceOrderUseCase";

export class GetByIdServiceOrderController {
  constructor(readonly getByIdServiceOrderUseCase: GetByIdServiceOrderUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const service = await this.getByIdServiceOrderUseCase.run(id);

      if (service)
        res.status(200).send({
          status: "success",
          data: {
            id: service.id,
            name: service.name
          },
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
