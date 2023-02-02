import { Router } from "express";
import verifyToken from "../../../../middlewares/verify-token";
import FlagsController from "../controllers/flags.controller";

const flagsRouter = Router();
const flagsController = new FlagsController();

flagsRouter.get("/", verifyToken, flagsController.findAll);
flagsRouter.get("/:id", verifyToken, flagsController.findById);

export default flagsRouter;
