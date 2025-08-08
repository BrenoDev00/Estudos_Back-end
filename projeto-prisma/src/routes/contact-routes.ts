import { Router, Request, Response } from "express";
import { contactController } from "../controllers/contact-controller";
import { schemaValidationMiddleware } from "../middlewares/schema-validation-middleware";
import { contactSchema } from "../schemas/contact-schema";

const contactRouter: Router = Router();

contactRouter.get("/", async (_req: Request, res: Response) => {
  await contactController.getContacts(_req, res);
});

contactRouter.post(
  "/",
  schemaValidationMiddleware(contactSchema),
  async (_req: Request, _res: Response) => {}
);

export default contactRouter;
