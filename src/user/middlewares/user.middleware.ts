import { NextFunction, Request, Response } from "express";
import { UserDTO } from "../dto/user.dto";
import { validate } from "class-validator";
import { HttpResponse } from "../../shared/response/http.response";

export class UserMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  userValidator(req: Request, res: Response, next: NextFunction) {
    const { name_user, username_user, password_user, role_user } = req.body;

    const valid = new UserDTO();

    valid.name_user = name_user;
    valid.username_user = username_user;
    valid.password_user = password_user;
    valid.role_user = role_user;

    validate(valid).then((error) => {
      if (error.length > 0) {
        return this.httpResponse.Error(res, error);
      } else {
        next();
      }
    });
  }
}
