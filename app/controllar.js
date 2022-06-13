let saveservice =require('./service')
var oddoreven=async(req,res)=>{
    console.log(req.body);
    var out=value(req.body.num)
    res.send(out)
}
  function value(n){
      
      if(n%2==0)
      return"even"
      else
      return"odd"
  }
var prime=async(req,res)=>{
    console.log(req.body);
    var to =pm (req.body.num)
    res.send(to)
}
function pm(n){
     key=true;
for(var i=2;i<n;i++){
    if(n%2==0 && i!==n);
     key=false;
   
}
     if(key==true)
     return"success"
     else 
        return"not success"
     
 }

 var calc=async(req,res)=>{
     console.log(req.body);
        //var praveen=ok(req.body.op,req.body.value1,req.body.value2);
        res.send(`${ok(req.body.op,req.body.value1,req.body.value2)}`)
        
 }
 function ok(op,value1,value2){
     if(op=="+"){
         return Number(value1)+Number(value2)
     }
      if(op=="-"){
     return  Number(value1)-Number(value2)
 }
    if(op=="%"){
        return value1%value2
    }
     if(op=="*"){
         return value1*value2
     }}
     let savedata =async(req,res)=>{
        let savedata=await saveservice.saveData(req.body);
       res.send("data saved sucessfully")
       console.log(req.body)
    }
    let viewdata =async(req,res)=>{
        let getdata=await saveservice.getData();
        res.send(getdata)     
    }
    let login =async(req,res)=>{
        let username=req.body.username;
        let password=req.body.password;
        let getdata=await saveservice.getuserdeatails(username);
        if(getdata.length==0){
            res.send("user not found")
        }
        else{
            if(password==getdata[0].password){
                res.send("login success")
            }
            else{
                res.send("password incorrect")
            }
        }
        
        res.send(getdata)
        

    }
    let update =async(req,res)=>{
        let username=req.body.username;
        let password=req.body.password;
        let getdata=await saveservice.update(username,password);
        res.send(getdata)

    }
    let delete1 =async(req,res)=>{
        let username=req.body.username;
  
        let getdata=await saveservice.delete1(username);
        res.send(getdata)

    }
    let insert=async(req,res)=>{
        let username=req.body.username;
        let password=req.body.password;
        let getdata=await saveservice.insert(username,password);
        res.send(getdata)
    }

module.exports={
    prime,oddoreven,calc,savedata,viewdata,login,update,delete1,insert
}