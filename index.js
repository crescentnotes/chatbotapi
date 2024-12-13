import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const port =4000;

app.use(bodyParser.urlencoded({extended:true}));


app.post('/chatbot',(req,res)=>{
  res.send("helo from chat bot")


})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});
