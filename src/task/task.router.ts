import { BaseRouter } from "../shared/routers/router";
import { TaskController } from "./controllers/task.controller";
import { TaskMiddleware } from "./middlewares/task.middleware";

export class TaskRouter extends BaseRouter<TaskController, TaskMiddleware> {
  constructor() {
    super(TaskController, TaskMiddleware);
  }

  routes(): void {
    this.router.get("/tasks", (req, res) => this.controller.getTasks(req, res));
    this.router.get("/task/:id", (req, res) =>
      this.controller.getTaskbyId(req, res)
    );
    this.router.get("/tasks/task-user/:id", (req, res) =>
      this.controller.getTaskWithRelationById(req, res)
    );
    this.router.post(
      "/createTask",
      (req, res, next) => [this.middleware.taskValidator(req, res, next)],
      (req, res) => this.controller.createTask(req, res)
    );
    this.router.put("/updateTask", (req, res) =>
      this.controller.updateTask(req, res)
    );
    this.router.delete("/deleteTask/:id", (req, res) =>
      this.controller.deleteTask(req, res)
    );
  }
}
