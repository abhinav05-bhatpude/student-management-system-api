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
app.get("/students/:id",(req,res)=>{

    const studentId=Number(req.params.id);

    const student=students.find(
        (student)=> student.id === studentId
    );
    res.json(student);
})

app.post("/students",(req,res)=>{

    const {name,course} = req.body;

    if(!name || !course){
        return res.status(400).json({
            message:"Name and course are required",
        });
    }
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