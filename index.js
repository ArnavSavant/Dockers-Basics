const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/home',(req,res) => {
   return res.json({message:'OK'});
})

app.listen(process.env.PORT, ()=>{
   console.log("Server is up");
})