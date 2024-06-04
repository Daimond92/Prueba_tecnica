import { BaseRouter } from "../shared/routers/router";
import { TaskController } from "./controllers/task.controller";

export class TaskRouter extends BaseRouter<TaskController> {
  constructor() {
    super(TaskController);
  }

  routes(): void {
    this.router.get("/tasks", (req, res) => this.controller.getTasks(req, res));
    this.router.get("/task/:id", (req, res) =>
      this.controller.getTaskbyId(req, res)
    );
    this.router.post("/createTask", (req, res) =>
      this.controller.createTask(req, res)
    );
    this.router.put("/updateTask", (req, res) =>
      this.controller.updateTask(req, res)
    );
    this.router.delete("/deleteTask/:id", (req, res) =>
      this.controller.deleteTask(req, res)
    );
  }
}
