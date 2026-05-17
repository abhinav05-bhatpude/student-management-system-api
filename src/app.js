const express = require("express");

const studentRoutes=require("./routes/studentRoutes");


const app=express();

app.use(express.json());
app.use("/students",studentRoutes);

module.export=app;