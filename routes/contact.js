const router = require("express").Router();
const { response } = require("express");
const nodemailer = require('nodemailer');

// router.get("/api/contact", (req, res) => {
//   res.send({ messsage: "Hello my man " });
// });

router.post("/api/contact", (req, res) => {
  const message = req.body;
  console.log(message);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Seb95wr@gmail.com',
      pass: 'pkqqbdhdoebxknzb' // naturally, replace both with your real credentials or an application-specific password
    }
  });
  
  const mailOptions = {
    from: req.body.email + ", " + req.body.name,
    to: 'Sebastianwulffrasmussen@gmail.com',
    subject: req.body.email + " - " + req.body.name + " - " + req.body.subject,
    text: req.body.message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // todo send email to yourself
  res.redirect("/contact")
});

module.exports = {
  router,
};
