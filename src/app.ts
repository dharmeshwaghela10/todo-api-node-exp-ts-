import express ,{Request, Response} from "express";
import todorouter from "./routers/todo"


const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req:Request, res:Response)=>{
res.json({
    message : "Rest API Using node"
})
})

app.use(todorouter); 

export default app;
