// require('dotenv').config({path:'./env'})

import bcrypt from 'bcrypt'
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server is running at : ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("mongo db connection falied ", err);
  });


/*

const app=express();

;(async ()=>{
  try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("error");
        throw error;
     })

     app.listen(proces.env.PORT,()=>{
        console.log('app is listening on ', process.env.PORT)
     })
  }catch(error){
    console.error("error: ",error)
  }
})()

*/
