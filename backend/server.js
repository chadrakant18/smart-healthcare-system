import express from "express";
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Smart Healthcare Backend Running");
});

app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        service: "Smart Healthcare API"
    });
});


const port=5000;

app.listen(port,()=>{
      console.log(`Server running on port ${port}`);

});