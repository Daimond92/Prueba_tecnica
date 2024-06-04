import { Request, Response } from "express";
import { TaskService } from "../services/task.service";
import { HttpResponse } from "../../shared/response/http.response";
import { DeleteResult, UpdateResult } from "typeorm";

export class TaskController {
  constructor(
    private readonly taskService: TaskService = new TaskService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getTasks(req: Request, res: Response) {
    try {
      const data = await this.taskService.findAllTask();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No existen tareas");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getTaskbyId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.taskService.findTaskbyId(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "No existe tarea");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getTaskWithRelationById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.taskService.findTaskWithRelation(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "No existe tarea");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.Error(res, e);
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const data = await this.taskService.createTask(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: UpdateResult = await this.taskService.updateTask(
        id,
        req.body
      );
      if (!data.affected) {
        return this.httpResponse.NotFound(
          res,
          "Hay un error en la actualización de la tarea"
        );
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: DeleteResult = await this.taskService.deleteTask(id);
      if (!data.affected) {
        return this.httpResponse.NotFound(
          res,
          "Hay un error en la actualización de la tarea"
        );
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
