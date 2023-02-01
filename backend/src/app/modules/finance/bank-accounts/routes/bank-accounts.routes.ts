import { Router } from "express";
import verifyToken from "../../../../middlewares/verify-token";
import BankAccountsController from "../controllers/bank-accounts.controller";

const bankAccountsRouter = Router({ mergeParams: true });
const bankAccountsController = new BankAccountsController();

bankAccountsRouter.get("/", verifyToken, bankAccountsController.findAll);
bankAccountsRouter.get(
  "/:bankAccountId",
  verifyToken,
  bankAccountsController.findById
);
bankAccountsRouter.post("/", verifyToken, bankAccountsController.save);
bankAccountsRouter.put(
  "/:bankAccountId",
  verifyToken,
  bankAccountsController.update
);
bankAccountsRouter.delete(
  "/:bankAccountId",
  verifyToken,
  bankAccountsController.delete
);

export default bankAccountsRouter;
