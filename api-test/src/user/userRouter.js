import { Router } from "express"
import app from "../app.js"
import { UserController } from "./userController.js"
import { authenticateByUserRoleAmin, authenticateToken } from "../auth/authMiddleware.js"
import { AuthController } from "../auth/authController.js"

const router = Router()

router.get("/", UserController.getAllUsers)
router.get("/:id", authenticateToken, UserController.getUserById)
router.post("/", authenticateToken, authenticateByUserRoleAmin, AuthController.register)
router.put("/", UserController.updateUser)
router.delete("/", UserController.deleteUser)

export default router