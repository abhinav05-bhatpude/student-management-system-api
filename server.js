const express=require("express");

const app=express();

const PORT=5001;

app.get("/",(req,res)=>{
    res.send("Student Management ARunning");
});
app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`);
})