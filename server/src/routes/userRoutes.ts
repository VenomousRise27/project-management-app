import { Router } from "express";
import { getUsers, createUsers } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", createUsers);

export default router;
