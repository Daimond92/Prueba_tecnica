"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    getUsers(req, res) {
        res.status(200).json({
            user: "David Malaver",
        });
    }
}
exports.UserController = UserController;
