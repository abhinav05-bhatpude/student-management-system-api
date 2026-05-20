const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

const students = [
    {
        id: 1,
        name: "Abhinav",
        course: "Computer Engineering",
    },
];

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`);

    next();
});
// Home Route
app.get("/", (req, res) => {
    res.send("Server Running");
});

// Get All Students
app.get("/students",(req,res)=>{

    const {name,course} =  req.query;

    if(name){

        const filteredStudents=students.filter((student) => 
            student.name.toLowerCase().includes(name.toLowerCase())
        );    
    }
    if(course){
        filteredStudents=filteredStudents.filter((student) => student.course.toLowerCase() === course.toLowerCase());
    }
    res.json({
        totalStudents:filteredStudents.length,
        students:filteredStudents,
    });
})

// Get Student By ID
app.get("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find(
        (student) => student.id === studentId
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    res.json({
        student,
    });
});

// Create Student
app.post("/students", (req, res) => {

    const { name, course } = req.body;

    // Validation
    if (!name || !course) {
        return res.status(400).json({
            message: "Name and course are required",
        });
    }

    const newStudent = {
        id: students.length + 1,
        createdAt:new Date(),
        ...req.body,
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent,
    });
});

// Update Student
app.put("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find(
        (student) => student.id === studentId
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    student.name = req.body.name || student.name;
    student.course = req.body.course || student.course;

    res.json({
        message: "Student updated successfully",
        student,
    });
});

// Delete Student
app.delete("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const studentIndex = students.findIndex(
        (student) => student.id === studentId
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    students.splice(studentIndex, 1);

    res.json({
        message: "Student deleted successfully",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});