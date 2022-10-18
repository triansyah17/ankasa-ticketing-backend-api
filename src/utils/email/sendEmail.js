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
        user: "88eae6ca45708a97807de39003b7197e",
        pass: "842d35461bdcf9a44406e252f1cb7e09",
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
