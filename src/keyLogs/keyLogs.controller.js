const KeyLogsService= require('./keyLogs.services')



exports.getAllKeyLogs = async (req, res) => {
    try {
        var academicYaer = req.query.academicYear;
        const keyLogs = await KeyLogsService.getAllKeyLogs(academicYaer);
        if(keyLogs){
            res.json({ success: true, data: keyLogs, message: 'KeyLogs found' });
        }else{
            res.json({ success: false, message: 'No KeyLogs found' });
        }
        
    } catch (e) {
        res.json({ success: false, message: e.message });
    }
};


exports.createKeyLogs = async (req, res) => {
    try {
        var body = req.body;
        const keyLogs = await KeyLogsService.createKeyLog(body);
        if(keyLogs){
            res.json({ success: true, data: keyLogs, message: 'Logs created successfully' });
        }else{
            res.json({ success: false, message: 'KeyLogs not created' });
        }
        
    } catch (e) {
        res.json({ success: false, message: e.message });
    }
}


exports.updateKeyLogs = async (req, res) => {
    try {
        var id = req.params.id;
        var body = req.body;
        const keyLogs = await KeyLogsService.updateKeyLog(id, body);
        if(keyLogs){
            res.json({ success: true, data: keyLogs, message: 'KeyLogs updated successfully' });
        }else{
            res.json({ success: false, message: 'KeyLogs not updated' });
        }
        
    } catch (e) {
        res.json({ success: false, message: e.message });
    }
}