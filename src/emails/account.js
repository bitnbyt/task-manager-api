const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitdhaterwal12@gmail.com',
        subject: "thank you for joining.",
        text: `wlcome ${name}. What is your experience about the product let me know?`
    })
}

const sendRemove = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitdhaterwal12@gmail.com',
        subject: 'oops you are leaving',
        text: `It seems ${name} you have not good experience at our services. can you tell us what we can help with your work?`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendRemove
}