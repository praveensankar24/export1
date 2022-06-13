var express=require('express');
const router=express.Router();
var controller=require('./controllar.js');
 let variable=(app)=>{
    router.post('/calc',controller.calc)
    router.post('/oddoreven',controller.oddoreven)
    router.post('/prime',controller.prime)
      router.post('/savedata',controller.savedata)
      router.post('/viewdata',controller.viewdata)
      router.post('/login',controller.login)
      router.post('/update',controller.update)
      router.post('/delete1',controller.delete1)
      router.post('/insert',controller.insert)
    app.use('/apk',router)
 }
 module.exports=variable;