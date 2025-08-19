import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "./config"

const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/signup", (req,res) => {

})

app.post("/signin", (req,res) => {

const userId = 1;

const token = jwt.sign({
    userId
}, JWT_SECRET)
    
res.json({
    token
})
})

app.post("/room", (req,res) => {
    
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
