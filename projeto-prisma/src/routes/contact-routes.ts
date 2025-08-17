import { Router, Request, Response } from "express";
import { contactController } from "../controllers/contact-controller";

const contactRouter: Router = Router();

contactRouter.get("/", async (req: Request, res: Response) => {
  await contactController.getAllContacts(req, res);
});

contactRouter.get("/:contactId", async (req: Request, res: Response) => {
  await contactController.getContactById(req, res);
});

contactRouter.post("/", async (req: Request, res: Response) => {
  await contactController.addContact(req, res);
});

contactRouter.delete("/:contactId", async (req: Request, res: Response) => {
  await contactController.deleteContactById(req, res);
});

export default contactRouter;
