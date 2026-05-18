const express=require("express");

const app=express();

const PORT=5000;

const students=[
    {
        id:1,
        name:"Abhinav",
        course:"Computer Engineering",
    },
];

app.get("/",(req,res)=>{
    res.send("Server Running");
})
app.get("/students",(req,res)=>{
    res.json(students);
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});