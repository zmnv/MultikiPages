import express, {Request, Response, Express} from "express";
import {db, animeName} from "./db/index";
import router from "./routes/routes";
import bodyParser from "body-parser";
import cors from "cors";


const PORT = process.env.PORT || 4000;
const jsonParses = bodyParser.json()
const app: Express = express();
app.use(cors())
app.use(express.json())
app.use(router)



app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
    console.log(`localhost:${PORT}`);
    
    process.once("SIGTERM", () =>{
        console.log('server close');
        process.exit

    })
})

