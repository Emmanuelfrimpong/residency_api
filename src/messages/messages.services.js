const Messages = require("./messages.model");

exports.getAllMessages = async (academicYear) => {
  //return where status is not deleted
  var messages = await Messages.find({
    isDeleted: false,
    academicYear: academicYear,
  });
  return messages;
};

exports.createMessage = async (body) => {
  var message = await Messages.create(body);
  return message;
};

exports.updateMessage = async (id, responseData) => {
  await Messages.findOneAndUpdate({ id: id } ,responseData);
  //return new updated message
  var message = await Messages.findOne({ id: id });
  return message;
};
