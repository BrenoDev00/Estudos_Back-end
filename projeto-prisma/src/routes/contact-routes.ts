import { Router, Request, Response } from "express";

const contactRouter: Router = Router();

contactRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).send({ success: true });
});

export default contactRouter;
