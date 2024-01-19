const Settings = require('./settings.model');


exports.getSettings = async () => {
    return await Settings.findOne();
};

exports.saveSettings = async (settingsParam) => {
    const settings = new Settings(settingsParam);
    return await settings.save();
};

//get settings by id

exports.getById = async (id) => {
    return await Settings.findOne({id: id});
};

//update settings

exports.update = async (id, settingsParam) => {
    // copy settingsParam properties to settings
    const settings = await Settings.findOne({id: id});
    Object.assign(settings, settingsParam);
    await settings.save();
    return settings;
};