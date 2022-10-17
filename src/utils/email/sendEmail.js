require("dotenv").config();
// const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// oauth2 config
// const oAuth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

const sendEmail = async (dataEmail) => {
  try {
    // config nodemailer
    // const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 2525,
      secure: false,
      auth: {
        user: "9c89c85556ac99f169e9d4c48f38bb9e",
        pass: "698cb69de21deddf10435d80a73e1bcd",
      },
    });

    // send email
    transporter
      .sendMail(dataEmail)
      .then((info) => {
        console.log("Email sended successfully.");
        console.log(info);
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = sendEmail;
