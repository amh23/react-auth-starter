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