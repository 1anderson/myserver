'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

function sendAuthorizationEmail(email_confirmation_token,email){
    nodemailer.createTestAccount((err, account) => {
        
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'hr7123597@gmail.com', // generated ethereal user
                    pass: 'anderson123456789'  // generated ethereal password
                }
            });
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: 'allangremista@hotmail.com', // sender address
                to: email, // list of receivers
                subject: 'Confirmation Register ✔', // Subject line
                //text: email_confirmation_token, // plain text body
                html: `<p>Click  para ativar a sua conta: http://localhost:3000/user/registration-confirmation/${email_confirmation_token}</p>` // html body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
}

export {
    sendAuthorizationEmail
}
