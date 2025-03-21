import { encryptPassword } from "../utils/encryptPassword.js"
import { UserRepository } from "./userRepository.js"

export class UserServices {
    static async createUser({ name, email, lastName, password, role }) {
        let data = null
        let error = null

        const passwordEncrypted = await encryptPassword(password)

        const userData = { name, email, lastName, password: passwordEncrypted, role }
        try{
            console.log(userData)
            const userCreated = await UserRepository.save(userData)
            data = userCreated
        }
        catch(error) {
            console.error(error)
            error = new Error(error)
        }
        return [error, data]
    }


    static async getUserById(id) {
        let data = null
        let error = null

        try{
            const user = await UserRepository.getUserById(id)
            data = user
        }
        catch(error) {
            console.error(error)
            error = new Error(error)
        }
        return [error, data]
    }

    static async getUserByEmail(email) {
        let data = null
        let error = null

        try{
            const user = await UserRepository.getUserByEmail(email)
            if (!user) {
                throw new Error(`No se encontró un usuario con el email ${email}`);
            }
            data = user
        }
        catch(error) {
            error = new Error(error)
        }
        return [error, data]
    }


    static async getAllUsers() {
        let data = null
        let error = null

        try{
            const user = await UserRepository.getAllUsers()
            data = user
        }
        catch(error) {
            console.error(error)
            error = new Error(error)
        }
        return [error, data]
    }

}