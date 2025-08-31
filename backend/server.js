import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {connectDB} from './src/config/db.js'

const app = express()
const port = 4000

app.use(express.json());
app.use(cors());
connectDB();




app.get("/", (req, res) => {
    res.send("Hello")
});

app.get("/display", )

app.listen(port, () => 
    console.log(`server running on port http://localhost:${port}`)
)