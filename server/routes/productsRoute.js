const router = require("express").Router();
const productService = require("../services/productService");

router.get("/", (req, res) => {
  productService.getAllProducts().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  productService.getProduct(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/:id/addRating", (req, res) => {
  const rating = req.body;
  const id = req.params.id;
  productService.addRating(id, rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/", (req, res) => {
  const product = req.body;
  productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const post = req.body;
  const id = post.id;
  productService.update(post, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
