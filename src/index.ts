import app from "./app"
import "./db/mongoose"
const PORT = parseInt(process.env.PORT!) || 8080;




app.listen(PORT ,()=> {
    console.log(`server started at port: ${PORT}`)
})