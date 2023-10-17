"use strict";
import * as nodemailer from "nodemailer";
import * as functions from "firebase-functions";
import Mail = require("nodemailer/lib/mailer");

export const feedBackForm = functions.https.onRequest(async (
    request,
    response
) => {
  functions.logger.info(request, {structuredData: true});

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS,
    },
  } as nodemailer.TransportOptions);

  const info = await transporter.sendMail>({
    from: process.env.MAIL_FROM, // sender address
    to: process.env.MAIL_TO, // list of receivers
    subject: process.env.MAIL_SUBJECT, // Subject line
    text: "Hello world123?", // plain text body
    // html: "<b>Hello world?</b>", // html body
  } as Mail.Options);

  functions.logger.info(info, {structuredData: true});

  response.send("Hello123  ");
});
