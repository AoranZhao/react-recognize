import nodemailer from 'nodemailer';

let sendEmail = (req, res) => {
    let body = req.body;
    let email = body.email || 'aoran_zhao@yahoo.ca',
        message = body.message || '[message]',
        name = body.name || '[name]';

    let smtpConfig = {
        host: 'smtp.exmail.qq.com',
        port: 465,
        secure: true,
        auth: {
            user: 'hermes@learnable.ai',
            pass: 'SunnyCrown2018'
        }
    }
    let transporter = nodemailer.createTransport(smtpConfig);
    let msg = {
        from: smtpConfig.auth.user,
        to: email,
        subject: `Request Demo from [${name}]`,
        text: `Received message from [${name}], message: ${message}`
    }
    transporter.sendMail(msg, (err, info) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        console.log(info);
        res.status(200).send(info);
        return;
    })
}

export default {
    sendEmail: sendEmail
}