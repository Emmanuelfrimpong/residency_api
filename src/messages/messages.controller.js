const MessageService = require("./messages.services");
const axios = require("axios");

exports.getAllMessages = async (req, res) => {
  try {
    var messages = await MessageService.getAllMessages(req.query.academicYear);
    if (messages) {
      return res.json({
        success: true,
        data: messages,
        message: "Succesfully Messages Recieved",
      });
    } else {
      return res.json({
        success: false,
        data: messages,
        message: "No Messages Found",
      });
    }
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
};

exports.createMessage = async (req, res) => {
  try {
    var body = req.body;
    //implement arkasel api
    // get all phone numbers from body.recipients
    var numbers = body.recipients.map((recipient) => recipient.phone);
    const data = {
      sender: body.senderId,
      message: body.message,
      recipients: numbers,
    };
    const config = {
      method: "post",
      url: "https://sms.arkesel.com/api/v2/sms/send",
      headers: {
        "api-key": "SmtPRE5HZk11Q3lKdHNGamJFRnE",
      },
      data: data,
    };
    axios(config)
      .then(function async(response) {
        if (response) {
          body.responseData = response.data;
          body.status = response.data.status;
          MessageService.createMessage(body).then((message) => {
            if (message) {
              return res.json({
                success: true,
                data: message,
                message: "Message Sent Succesfully",
              });
            } else {
              return res.json({
                success: false,
                data: message,
                message: "Unble to send Message",
              });
            }
          });
        }
      })
      .catch(function (error) {
        res.json({ success: false, message: error.message });
      });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
};

exports.updateMessage = async (req, res) => {
  try {
    var body = req.body;
    var id = req.params.id;

    var message = await MessageService.updateMessage(id, body);
    if (message) {
      return res.json({
        success: true,
        data: message,
        message: "Message Updated Succesfully",
      });
    } else {
      return res.json({
        success: false,
        data: message,
        message: "Unble to Update Message",
      });
    }
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
};
