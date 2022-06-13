const app=require('express')();
const bodypursar=require('body-parser');
app.use(bodypursar.json());
const port=3000;
(require('./routes'))(app);
(require(`./mangoose`));
const{TextDecoder,TextEncoder}=require("util");
app.listen(port,()=>{
    console.log("The enter port value is 3000 ")})