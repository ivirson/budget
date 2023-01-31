import { Router } from "express";
import verifyToken from "../../../../middlewares/verify-token";
import CreditCardsController from "../controllers/credit-cards.controller";

const creditCardsRouter = Router({ mergeParams: true });
const creditCardsController = new CreditCardsController();

creditCardsRouter.get("/", verifyToken, creditCardsController.findAll);
creditCardsRouter.get("/:cardId", verifyToken, creditCardsController.findById);
creditCardsRouter.post("/", verifyToken, creditCardsController.save);
creditCardsRouter.put("/:cardId", verifyToken, creditCardsController.update);
creditCardsRouter.delete("/:cardId", verifyToken, creditCardsController.delete);

export default creditCardsRouter;
