const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/', async (req, res) => {
   const {to, subject, body} = req.body;

   try {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL,
        to: to.join(','),
        subject,
        html: body
    });

    res.json({ success: true });

   } catch (error) {
    console.log('Email sending Error:', error.message);
    res.status(500)
    .json({error: 'failed to send to email'})
   }
});

module.exports = router;