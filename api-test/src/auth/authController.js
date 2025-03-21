import { UserServices } from "../user/userServise.js"
import { comparePassword } from "../utils/encryptPassword.js"
import { generateJWT } from "../utils/generateJWT.js";

export class AuthController {
    static async register(req, res) {
        const { name, lastName, email, password, role } = req.body;
      
        // Verifica si el usuario existe
        const [_, existingUser] = await UserServices.getUserByEmail(email);
        if (existingUser) {
          return res.status(400).json({ message: "El usuario ya existe", ok: false });
        }
      
        const [error, data] = await UserServices.createUser({ name, lastName, email, password, role });
        if (error) {
          console.error(error);
          return res.status(500).json({ message: error.message, ok: false });
        }
        res.status(200).json({ message: "Registro exitoso", ok: true, data });
    }

    static async login(req, res) {
        const { email, password } = req.body
        const [error, data] = await UserServices.getUserByEmail(email)
        if(error) {
            console.error(error)
            return res.status(500).json({ message: error.message, ok: false })
        }

        if( !data ) return res.status(401).json({ message: "user not found", ok: false })

        const isAuth = await comparePassword(password, data.password)
        if(!isAuth) {
            return res.status(401).json({ message: "invalid password", ok: false })
        }

        console.log(data)
        const token = await generateJWT(data.id, data.rol )
            
        res.status(200).json({ message: "login success", ok: true, data: {token} })
    }
}