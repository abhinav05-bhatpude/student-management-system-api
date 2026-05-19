const express=require("express");

const app=express();

app.use(express.json());

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
});

app.post("/students",(req,res)=>{
    const newStudent={
        id: students.length + 1,
        ...req.body,
    }

    students.push(newStudent);

    res.json({
        message:"Student added succesfully",
        student:newStudent,
    });
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});