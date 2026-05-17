const express=require("express");

const {
    getStudents,createStudents,
} = require("../controllers/studentController");

const router=express.Router();

router.get("/",getStudents);
router.post("/",createStudent);

module.export=router;