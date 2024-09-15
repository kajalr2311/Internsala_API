require("dotenv").config({ path:"./.env"});
const express =require("express");
const app = express();


//bd connect
require("./models/database").connectDatabase();


//logger
const logger = require("morgan");
app.use(logger("tiny"));

 //bodyparser
 app.use(express.json());
 app.use(express.urlencoded({extended:false}))

//router
app.use("/", require("./routes/indexRoute"));


// error handler
const ErrorHandler = require("./utils/errorHandler");
const { genetatedErrors } = require("./middlewares/errors");
app.all("*",(req,res,next) =>{
  next(new ErrorHandler(`Requested IS NOT Found ${req.url}`, 404));
});
app.use(genetatedErrors);
app.listen(
    process.env.PORT,
     console.log
    (`server is running on port${process.env.PORT}`));