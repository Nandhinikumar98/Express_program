/*console.log("Hello");

const express = require("express");
const app = express();

app.listen(3000); --- if we give like this it shows { Cannot GET /} in web browser, we need to mention routes to get proper op*/

const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

app.set("view engine", "ejs"); // to overcome error in 19th line
app.use(logger);

app.get("/", logger, (req, res) => {
  console.log("Hello Nandhini");
  //res.sendStatus(500); -- for send status
  //res.status(500).send("HI"); -- for sending msg while the status of the code display
  //res.download("server.js"); -- to download the file in this folder
  //res.render("index"); //-- it shows an error as No default engine was specified
  res.render("index", { text: "World" }); // to give data to html page
});

const userRouter = require("./routes/users");
//const postRouter = require("./routes/posts");
app.use("/users", userRouter);

function logger(req, rens, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
