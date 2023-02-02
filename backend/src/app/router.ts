import { Router } from "express";
import authRouter from "./modules/core/auth/routes/auth.routes";
import usersRouter from "./modules/core/users/routes/users.routes";
import bankAccountsRouter from "./modules/finance/bank-accounts/routes/bank-accounts.routes";
import creditCardsRouter from "./modules/finance/credit-cards/routes/credit-cards.routes";
import flagsRouter from "./modules/finance/credit-cards/routes/flags.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/users/:userId/credit-cards", creditCardsRouter);
router.use("/users/:userId/bank-accounts", bankAccountsRouter);
router.use("/flags", flagsRouter);

export default router;
