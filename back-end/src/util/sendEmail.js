import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export const sendEmail = async ({ to, from, subject, text, html }) => {
  const sentFrom = new Sender(to.email, to.name);

  const recipients = [new Recipient(from.email, from.name)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setHtml(html)
    .setText(text);

  await mailerSend.email.send(emailParams);
};

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export const sendEmail = ({ from,to, subject, text, html }) => {
  const sentFrom = new Sender(from.email, from.name);
  console.log(from.email)

  const recipients = [new Recipient(to.email, to.name)];
  console.log(to.email)

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setHtml(html)
    .setText(text);
  mailerSend.email.send(emailParams);
};
