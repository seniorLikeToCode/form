import sendgrid from @sendgrid/mail;

sendgrid.setApiKey("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");


async function handler(req, res) {
    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
          to: "abhishek234547@gmail.com", // Your email where you'll receive emails
          from: "prateek18801@gmail.com", // your website email address here
          subject: `${req.body.subject}`,
          html: `<div>You've got a mail</div>`,
        });
      } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
      }

      return res.status(200).json({ success: true});
}