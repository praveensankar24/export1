const mongoose=require('mongoose');
const{TextDecoder,TextEncoder}=require("util");
var url="mongodb://127.0.0.1:27017/node33";
mongoose.connect(url,{
    useNewUrlparser:true,
    useUnifiedTopology:true

});
mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connected`);
});
mongoose.connection.on('disconnected',()=>{
    console.log(`Mongoose disconnected`);
}
);
mongoose.connection.on('error',(err)=>{
    console.log(`Error while connecting ${err}`);
});
