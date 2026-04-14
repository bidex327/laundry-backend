const Message = require("../models/messageSchema");
const transport = require("../config/mail");

const sendMessage = async (req, res) => {
  const { name, phoneNumber, email, message } = req.body;

  try {
    await Message.create({ name, phoneNumber, email, message });

    await transport.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New message",
      text: `${name}
            ${phoneNumber}
            ${email}
            ${message}`,
    });
    res.status(200).json({ success: true, message: "Email sent!!" });
  } catch (error) {
    console.error("ERROR DETAILS:");
    console.log(error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
};

module.exports = sendMessage;
