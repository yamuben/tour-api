import dotenv from "dotenv";

dotenv.config();

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_ID
);

//Hey Eric, your Canopy  booking tour accepted  ApplicationID:11111111111

const sendSms = (
  userName,
  tourName,
  applicationStatus,
  applicationId,
  userPhone
) => {
  client.messages
    .create({
      body:
        "Hey " +
        userName +
        ", your " +
        tourName +
        " booking tour " +
        applicationStatus +
        ", RefId: " +
        applicationId,
      from: "+15074282144",
      to: userPhone,
    })
    .then((message) => console.log(message.sid));
};
export default sendSms;