import { UserServices } from "./userServise.js"

export class UserController {
    static async getUserById(req, res) {
        const { id } = req.params
        const [error, data] = await UserServices.getUserById(id)
               
        if(error) {
            console.error(error)
            return res.status(500).json({ message: error.message, ok: false })
        }
        res.status(200).json({ message: "User obtained success", ok: true, data })
    }

    static async getAllUsers(req, res) {
        console.log(UserServices.getAllUsers())
        const [error, data] = await UserServices.getAllUsers()
               
        if(error) {
            console.error(error)
            return res.status(500).json({ message: error.message, ok: false })
        }
        res.status(200).json({ message: "register success", ok: true, data })
    }

    static updateUser(req, res) {

    }

    static deleteUser(req, res) {}
}