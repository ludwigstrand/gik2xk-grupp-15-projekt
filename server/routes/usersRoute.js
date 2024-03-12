const router = require("express").Router();

router.get("/:id/getCart", (req, res) => {
  res.send("Users route");
});

router.get("/", (req, res) => {
  res.send("User route");
});

router.post("/", (req, res) => {
    res.send("Add user route");
    }
);

router.put("/", (req, res) => {
    res.send("Update cart route");
    }
);

router.delete("/", (req, res) => {
    res.send("Delete cart route");
    }
);



module.exports = router;
