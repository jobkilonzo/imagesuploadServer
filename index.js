import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const corsOptions = {
    origin:true,
    credentials: true
}
const app = express()
app.use(cors(corsOptions))
app.listen(3000, () =>{
    console.log("listening on port 3000")
})