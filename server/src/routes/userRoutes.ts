import { Router } from "express";
import { getUsers, createUsers, getUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", createUsers);
router.get("/:cognitoId", getUser);

export default router;
