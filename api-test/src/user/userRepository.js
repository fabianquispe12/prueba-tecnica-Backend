import sql from "../services/connectionDB.js";

export class UserRepository {

    static async save({ name, lastName, email, password, role="user" }) {
        console.log(role)

        try {
            const result = await sql`
                INSERT INTO usuarios (nombre, apellido,email, password, creado_en, rol)
                VALUES (${name}, ${lastName}, ${email}, ${password}, NOW(), ${role})
                RETURNING *;
            `;
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    
    static async getUserById(id) {
        try {
            const result = await sql`
                SELECT * FROM usuarios
                WHERE id = ${id};
            `;
            if (!result[0]) {
                throw new Error(`No se encontró un usuario con el ID ${id}`);
            }
            return result[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    static async getUserByEmail(email) {
        try {
            const result = await sql`
                SELECT * FROM usuarios
                WHERE email = ${email};
            `;
            console.log(result)
            
            return result[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    static async getAllUsers() {
        try {
            const result = await sql`
                SELECT * FROM usuarios;
            `;
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            const result = await sql`
                SELECT * FROM usuarios
                WHERE id = ${id};
            `;
            if (!result[0]) {
                throw new Error(`No se encontró un usuario con el ID ${id}`);
            }
            return result[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static updateUser(id, userData) {
        return null
    }

    static deleteUser(id) {
        return null
    }
}