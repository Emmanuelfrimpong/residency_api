const KeyLogs = require('./keyLogs.model')



exports.getAllKeyLogs = async (academicYear) => {
    var logs = await KeyLogs.find({academicYear: academicYear});
    return logs;
}

exports.createKeyLog = async (body) => {
    var log = await KeyLogs.create(body);
    return log;
}

//update keylog
exports.updateKeyLog = async(id,data)=>{
   var update= await KeyLogs.findOneAndUpdate({ id: id }, data);
   if(update){
    var newKeyLog = await KeyLogs.find({id:id});
    return newKeyLog;
   }else{
    return null;
   }
}