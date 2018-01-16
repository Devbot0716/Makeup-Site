'use strict';
const nodemailer = require('nodemailer');
 require('dotenv').config();

module.exports = {

  getAll: (req, res, next)=>{
    req.app.get('db').getAll().then((response)=>{
      res.send(response)
    }).catch((err)=>{
      console.log(err);
    })
  },

  getImages: (req, res, next)=>{
    console.log(req.params.Type)
    req.app.get('db').getImages(req.params.Type).then((response)=>{
      res.send(response)
    }).catch((err)=>{
      console.log(err);
    })
  },

//EMAIL
  sendEmail (req, res) {
        console.log('req.body', req.body);

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_PASS
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `"New Client" <${process.env.ADMIN_EMAIL}>`, // sender address
            to: process.env.ADMIN_EMAIL, // list of receivers
            subject: req.body.subject, // Subject line
            text: 'Making breadsticks', // plain text body
            html: `<b>${ req.body.body }</b>` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.send(error)
            }
            console.log('Message %s send: %s', info.messageId, info.response);
            res.status(200).send(info);
        });

    }

  // getDetails: (req, res, next)=>{
  //   console.log(req.params.ID)
  //   req.app.get('db').getDetails(req.params.ID).then((response)=>{
  //     res.send(response)
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }
}
