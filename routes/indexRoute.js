const express = require("express");
const { homepage , studentsignup} = require("../controllers/indexControllers");
const router = express.Router();

router.get("/", homepage);

//post /student/signup

router.post("/student/signup", studentsignup);

module.exports = router;