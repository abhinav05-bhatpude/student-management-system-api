const getStudents =(req,res) =>{
    res.send("Get all students controller");
};

const createStudent = (req,res) =>{
    res.send("Create student controller");
};

module.export={
    getStudents,createStudent
};