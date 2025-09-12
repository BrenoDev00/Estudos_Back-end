import { Response, Request } from "express";

export interface IUserController {
  addUser(req: Request, res: Response): Promise<Response>;
}
