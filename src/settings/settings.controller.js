const SettingsService = require('./settings.services');


exports.getSettings = async (req, res) => {
    try {
        const settings = await SettingsService.getSettings();
        if (settings) {
            return res.json({
                success: true,
                data: settings
            });
        } else {
            return res.json({
                success: true,
                message: "No settings found",
            });
        }
    } catch (err) {
        return  res.json({
            success: false,
            message: err
        });
    }
    
};

exports.saveSettings = async (req, res) => {
    try {
        const body = req.body;
        //check if settings exists with same id
        const settingsExists = await SettingsService.getById(body.id);
        if (settingsExists) {
            //update settings with same id
            const settings = await SettingsService.update(body.id, body);
            return res.json({
                success: true,
                message: 'Settings updated successfully.',
                data: settings
            });
        }else{
            //create settings
            const settings = await SettingsService.saveSettings(body);
            return res.json({
                success: true,
                message: 'Settings created successfully.',
                data: settings
            });
        }
       
       
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        });
    }
    
};