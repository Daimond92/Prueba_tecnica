"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = require("express");
//T= controlador U=Middleware
class BaseRouter {
    //public middleware: U
    constructor(TController) {
        this.router = (0, express_1.Router)();
        this.controller = new TController();
        this.routes();
    }
    routes() { }
}
exports.BaseRouter = BaseRouter;
