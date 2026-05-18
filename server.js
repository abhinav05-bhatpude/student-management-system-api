const express=require("express");

const app=express();

const PORT=5000;

app.get("/",(req,res)=>{
    res.send("Server Running");
})
app.get("/students",(req,res)=>{
    res.send("All Students");
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});