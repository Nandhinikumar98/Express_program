const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("New User");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

/*router.get("/:id", (req, res) => {
  req.params.id;
  res.send(`Get user with ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  req.params.id;
  res.send(`update user with ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  req.params.id;
  res.send(`Delete user with ID ${req.params.id}`);
}); -- this all same process */

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [{ name: "nandy" }, { name: "dony" }];
router.param("id", (req, res, next, id) => {
  console.log(id);
  req.user = users[id];
  next(); // if we don't call next() it will loading untill all process request and response send to them
});
module.exports = router;
