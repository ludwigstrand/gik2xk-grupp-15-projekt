const router = require("express").Router();
const cartService = require("../services/cartService");

router.get("/", (req, res) => {
    cartService.getAllCarts().then((result) => {
        res.status(result.status).json(result.data);
    });
    });

router.get("/:id", (req, res) => {
    const id = req.params.id;
    cartService.getCart(id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.post("/", (req, res) => {
    const cart = req.body;
    cartService.createCart(cart).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.put("/", (req, res) => {
    const cart = req.body;
    const id = cart.id;
    cartService.updateCart(cart, id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const productId = req.body.productId
    cartService.destroyCartRow(id, productId).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.post("/addProduct", (req, res) => {
    const amount = req.body.amount;
    const productId = req.body.productId;
    const userId = req.body.userId;
    cartService.addProductToCart( amount, productId, userId ).then((result) => {
        res.status(result.status).json(result.data);
    });
});

module.exports = router;