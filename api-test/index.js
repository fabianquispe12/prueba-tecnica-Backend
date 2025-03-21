import app from "./src/app.js"
import { createTables } from "./src/services/connectionDB.js"


const PORT = 5000

const init = async () => {
    await createTables()
    
    app.listen(PORT, () => {
        console.log("server running on port", PORT)
    })

}

init()