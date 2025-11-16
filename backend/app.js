const express=require('express');

app=express()


PORT=8000

app.get("/",(req,res)=>{
    res.send("This is backend");
})
app.listen(PORT,()=>{
    console.log(`app is running at port: ${PORT}`)
})