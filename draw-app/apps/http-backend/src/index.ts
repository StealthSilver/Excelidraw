import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/signup", (req,res) => {

})

app.post("/signin", (req,res) => {
    
})

app.post("/room", (req,res) => {
    
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
