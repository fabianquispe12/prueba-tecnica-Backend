import postgres from 'postgres'


const sql = postgres({
    host                 : 'localhost',            // Dirección IP[s] o nombre de dominio[s] de Postgres
    port                 : 5432,          // Puerto[s] del servidor Postgres
    database             : 'api_test',            // Nombre de la base de datos a la que conectarse
    username             : 'JhonDoe',            // Usuario de la base de datos
    password             : 'SecretKey',            // Contraseña del usuario de la base de datos
})

export const createTables = async () => {
    try {
        // await sql`
        //     DROP TABLE IF EXISTS usuarios;
        // `
        await sql`
            CREATE TABLE IF NOT EXISTS usuarios (
            id SERIAL PRIMARY KEY,
            nombre VARCHAR(50) NOT NULL,
            apellido VARCHAR(50) NOT NULL,
            rol VARCHAR(50) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `;
      
      console.log('Tabla "usuarios" creada con éxito');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


export default sql