import express from "express"
import cors from "cors"
import userRouter from "./user/userRouter.js"
import authRouter from "./auth/authRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({ message: "success" })
})

app.use("/users", userRouter)
app.use("/auth", authRouter)

export default app