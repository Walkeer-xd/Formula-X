require("dotenv").config();
const express = require("express");
const connectDB=require('./db/connect.js');
const notFound=require('./middlewares/not-found.js')
const app = express();
app.use(express.json());
app.get("/health", (req, res) => {
  res.send("reached the homepage");
});
app.use(notFound);

const port=process.env.PORT || 3000;
const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}....`)
        })

    }catch(error){
        console.log(error);
    }
}
start();
