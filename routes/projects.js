const router = require("express").Router(); // dummy router --- this all is used for data apis that are crud related

// dummy route is a route wihtout the server functionality and being a competing server to the app.js

// On the projects page, fetch all the projects from the route below

const projects = [
  {
    title: "Nodefolio",
    description: "Personal portfolio implemented in Node.js",
    creationDate: new Date("2021-04-08"),
    endDate: new Date("2021-04-15"),
    gitLink: "https://github.com/Sebastian-WR/Nodefolio.git/",
  }
];

router.get("/api/projects", (req, res) => {
  res.send({ projects });
});

// exports all we want and add to it, by default is an object/json it is a variable and not a function, can be many thinbgs inside, functions, numbers, strings and so
// exports the router and its routes
module.exports = {
  router
};

// install nodemailer and copy the code and you can send emails
// fake gogle account, less secure is needed to turn on through gogle so nodemailer can send mails on your behalf

// Assignment schema for a project challenge yourself, requirements were bad but struggleing is healthy
/*

    Project Schema

    Title - (string)

    Description: (string)

    Creation date: (date)

    Language(s): (array)

    Tech used: (array)

    Image: (string?)

    HostedLink: (String)

    GitLink: (string)

*/
