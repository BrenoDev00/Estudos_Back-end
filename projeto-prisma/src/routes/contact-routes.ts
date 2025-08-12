import { Router, Request, Response } from "express";
import { contactController } from "../controllers/contact-controller";
import { schemaValidationMiddleware } from "../middlewares/schema-validation-middleware";
import { contactSchema } from "../schemas/contact-schema";

const contactRouter: Router = Router();

contactRouter.get("/", async (req: Request, res: Response) => {
  await contactController.getContacts(req, res);
});

contactRouter.post(
  "/",
  schemaValidationMiddleware(contactSchema),
  async (req: Request, res: Response) => {
    await contactController.addContact(req, res);
  }
);

export default contactRouter;
