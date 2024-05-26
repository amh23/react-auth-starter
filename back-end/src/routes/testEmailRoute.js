import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try{
            
            const mailerSend = new MailerSend({
              apiKey: process.env.MAILERSEND_API_KEY,
            });
            
            const sentFrom = new Sender("MS_RNZnHm@trial-jpzkmgqyv1yl059v.mlsender.net", "sontsont");
            
            const recipients = [
              new Recipient("ayemyahan23@gmail.com", "ayemya")
            ];
            
            const emailParams = new EmailParams()
              .setFrom(sentFrom)
              .setTo(recipients)
              .setReplyTo(sentFrom)
              .setSubject("This is a Subject")
              .setHtml("<strong>This is the HTML content</strong>")
              .setText("This is the text content");
            
            await mailerSend.email.send(emailParams);
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try{
            await sendEmail({
                from: {
                    email: 'MS_RNZnHm@trial-jpzkmgqyv1yl059v.mlsender.net',
                    name: 'Sont Sont',
                },
                to: {
                    email: 'ayemyahan23@gmail.com',
                    name: 'aye mya',
                },
                subject: 'Testing sending email using MailerSend',
                text: 'If you are reading this, it works',
                html: '<strong>Hi there, I am HTML</strong>',
            });            
            
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}