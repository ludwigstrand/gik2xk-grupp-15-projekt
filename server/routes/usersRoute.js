const router = require("express").Router();
const validate = require("validate.js");
const userService = require("../services/userService");

const constraints = {
  email: {
    length: {
      minimum: 4,
      maximum: 200,
      tooShort: "^E-postadressen måste vara minst %{count} tecken lång.",
      tooLong: "^E-postadressen får inte vara längre än %{count} tecken lång.",
    },
    email: {
      message: "^E-postadressen är i ett felaktigt format.",
    },
  },
  username: {
    length: {
      minimum: 3,
      maximum: 50,
      tooShort: "^Användarnamnet måste vara minst %{count} tecken långt.",
      tooLong: "^Användarnamnet får inte vara längre än %{count} tecken långt.",
    },
  },
  imageUrl: {
    url: {
      message: "^Sökvägen är felaktig.",
    },
  },
};

router.get("/:id/getCart", (req, res) => {
  const id = req.params.id;

  userService.getUserCart(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  userService.getAllUsers().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    userService.create(user).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  const id = user.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || "Id är obligatoriskt.");
  } else {
    userService
      .update(user, id, {
        where: { id },
      })
      .then((result) => {
        res.status(result.status).json(result.data);
      });
  }
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  userService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
