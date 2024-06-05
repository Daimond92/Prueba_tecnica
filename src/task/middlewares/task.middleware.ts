import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { TaskDTO } from "../dto/task.dto";
import { validate } from "class-validator";

export class TaskMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  taskValidator(req: Request, res: Response, next: NextFunction) {
    const { title_task, description_task, due_date_task, status_task, user } =
      req.body;

    const valid = new TaskDTO();

    valid.title_task = title_task;
    valid.description_task = description_task;
    valid.due_date_task = due_date_task;
    valid.status_task = status_task;
    valid.user = user;

    validate(valid).then((error) => {
      if (error.length > 0) {
        return this.httpResponse.Error(res, error);
      } else {
        next();
      }
    });
  }
}
