import { UserController } from "./controllers/user.controller";
import { BaseRouter } from "../shared/routers/router";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
    this.router.get("/user/:id", (req, res) =>
      this.controller.getUserbyId(req, res)
    );
    this.router.post("/createUser", (req, res) =>
      this.controller.createUser(req, res)
    );
    this.router.put("/updateUser", (req, res) =>
      this.controller.updateUser(req, res)
    );
    this.router.delete("/deleteUser/:id", (req, res) =>
      this.controller.deleteUser(req, res)
    );
  }
}
