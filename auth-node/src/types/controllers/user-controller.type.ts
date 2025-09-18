import { Response, Request } from "express";

export interface IUserController {
  getUserById(req: Request, res: Response): Promise<Response>;

  addUser(req: Request, res: Response): Promise<Response>;
}
