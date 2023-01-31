import { Router } from "express";
import authRouter from "./modules/core/auth/routes/auth.routes";
import usersRouter from "./modules/core/users/routes/users.routes";
import creditCardsRouter from "./modules/finance/credit-cards/routes/credit-cards.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/users/:userId/credit-cards", creditCardsRouter);

export default router;
