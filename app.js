const express = require('express');
const app = express();
const fetch = require('node-fetch');
app.use(express.static("public")); // client is allowed to freely grap files // so its not about the html pages, but about additional files which are used in the html files defined
// man skal bruge den for at bruge CSS filer og mapper med filer da client kan få fat i statisk content . med dette
app.use(express.json()); // need for parsing the response when you get back the body so it turns into json <- it is a bodyparser
const fs = require('fs'); // working with files write, read and open to create and so
const port = process.env.PORT || 8080;

// SSR Server-side rendering 
// read the file as text 
// send the file to the client
// cause you can send html in res.send() that is server side rendering

// in node there are two ways to read a file
// async : correct 99.9%  of the time
// sync : <- use this here cause it's not a problem that the server is blocked when it starts
// cause we need the html before the routes should be accesible anyway
// you want to read it sync before the route and serve it to the client 
// serve the front page by server-side  rendering
// this is serv-side rendering

// The answer is SEO the webcrawler visiting will not see, server side render is fully optimized for SEO when you serve it all the content is there. This fixes ranking problems, the webcrawler can think its an empty page if it has to load during.
// så SSR er at vi loader det hele fra server side og sender det når det er loaded altså html. og det er hurtigt når client bruger det efter det er loaded 
// client side rendering er at man sender filer osv og så render client selv alting så der kan være små loading times.

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

app.get("/", (req, res) => {
    res.send(header+ frontpage + footer); // take this file and send to client
});

app.get("/projects", (req, res) => {
    res.send(header + projects + footer); // take this file and send to client
});

app.get("/contact", (req, res) => {
    res.send(header + contact + footer); // take this file and send to client
});

app.listen(port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is running on port", Number(port));
    }
});

// -> npm i express nodemon node-fetch cross-env <- installere flere packages på en gang 
// CTRL + K + C kommenter koden markeret med //
/* CTRL + K + U fjerner kommentar // 
SHIFT + ALT + A Laver en blok kommentart og samme kommando fjerner kommentering igen  */
  