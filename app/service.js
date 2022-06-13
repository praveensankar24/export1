const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const registrationSchema =mongoose.Schema({
    "firstname" :String,
    "lastname" :String,
    "email" :String,
    "address":String,
    "password" :String,
    "mobile" :String,
    "dob" :String,
    "deg" :String,
    "gender":String
});
const model =mongoose.model('registration',registrationSchema);
let saveData =async(data)=>{
    try{
        const user= new model(data);
        const savedata =await user.save()
    return savedata
    }
    catch(err)
    {
       return false 
    }}
    let getData=async()=>{
        let getRegistrationDetails=await model.find();
        return getRegistrationDetails
    }
    let getuserdeatails=async(data)=>{
        let getUserDtails=await model.aggregate([
            {$match:{"email":data}}
        ]);
        return getUserDtails 
    }
    let update=async(data,data1)=>{
        await model.updateMany({"email":"rtafag","password":"qwe"},{"email":data,"password":data1});
        return "success"

    }
    let delete1=async(data)=>{
        await model.deleteOne({"email":"praveen@gmai"});
        return "delete is success"

    }
    let insert=async(data)=>{
        await model.insertMany([{"email":"famous","password":"1998"},{"Name":"racky","lastname":"praveen"}]);
        return "insert is success"

    }



module.exports={
    saveData,
    getData,
    getuserdeatails,
    update,
    delete1,
    insert

}