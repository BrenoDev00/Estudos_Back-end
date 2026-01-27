import { Router, Request, Response } from "express";
import { ContactController } from "../controllers/contact-controller";
import { ContactRepository } from "../repositories/contact-repository";
import { ContactService } from "../services/contact-service";

const contactRepository = new ContactRepository();
const contactService = new ContactService(contactRepository);
const contactController = new ContactController(contactService);

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

contactRouter.put("/:contactId", async (req: Request, res: Response) => {
  await contactController.updateContactById(req, res);
});

contactRouter.delete("/:contactId", async (req: Request, res: Response) => {
  await contactController.deleteContactById(req, res);
});

export default contactRouter;
