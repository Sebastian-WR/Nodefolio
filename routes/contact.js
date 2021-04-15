const router = require("express").Router();

// router.get("/api/contact", (req, res) => {
//   res.send({ messsage: "Hello my man " });
// });

router.post("/api/contact", (req, res) => {
  const message = req.body;
  console.log(message);
  // todo send email to yourself
  res.redirect("/")
});

module.exports = {
  router,
};
