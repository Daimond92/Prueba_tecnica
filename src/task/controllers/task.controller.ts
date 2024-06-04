import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

export class TaskController {
  constructor(private readonly taskService: TaskService = new TaskService()) {}
  async getTasks(req: Request, res: Response) {
    try {
      const data = await this.taskService.findAllTask();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getTaskbyId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.taskService.findTaskbyId(id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const data = await this.taskService.createTask(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.taskService.updateTask(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.taskService.deleteTask(id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}
