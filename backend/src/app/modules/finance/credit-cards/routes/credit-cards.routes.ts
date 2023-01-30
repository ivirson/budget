import { Router } from "express";
import verifyToken from "../../../../middlewares/verify-token";
import CreditCardsController from "../controllers/credit-cards.controller";

const creditCardsRouter = Router();
const creditCardsController = new CreditCardsController();

creditCardsRouter.get("/", verifyToken, creditCardsController.findAll);
creditCardsRouter.get("/:id", verifyToken, creditCardsController.findById);
creditCardsRouter.post("/", verifyToken, creditCardsController.save);
creditCardsRouter.put("/:id", verifyToken, creditCardsController.update);
creditCardsRouter.delete("/:id", verifyToken, creditCardsController.delete);

export default creditCardsRouter;
