const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

async function getAllCarts() {
  try {
    const allCarts = await db.cart.findAll();
    return createResponseSuccess(allCarts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getCart(id) {
    try {
        const cart = await db.cart.findOne({
        where: { id },
        include: [db.user, db.product]
        });
        return createResponseSuccess(_formatCart(cart));
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function createCart(cart) {
    try {
      const newCart = await db.cart.create(cart);
      return createResponseSuccess(newCart);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function updateCart(cart, id) {
    if (!id) {
      return createResponseError(422, "Id är obligatoriskt");
    }
    try {
      const existingCart = await db.cart.findOne({ where: { id } });
      if (!existingCart) {
        return createResponseError(404, "Hittade ingen kundvagn att uppdatera.");
      }
      await db.cart.update(cart, {
        where: { id },
      });
      return createResponseSuccess(cart);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function destroyCartRow(cartId, productId) { 
  if (!cartId) {
      return createResponseError(422, "Id är obligatoriskt");
    }
    try {
      await db.cartRow.destroy({
        where: { productId },
      });
      return createResponseMessage(200, "Kundvagnen raderades.");
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function _findOrCreateCart(userId) {
    try {
      const cart = await db.cart.findOrCreate({
        where: { userId },
        defaults: { userId },
      });
      return cart[0].id;
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function addProductToCart(amount, productId, userId) {
  if (!amount || !productId || !userId) {
    return createResponseError(422, "Amount, productId, and userId are required");
  }
  try {
    const cartId = await _findOrCreateCart(userId);
    const cartRow = await db.cartRow.findOne({
      where: { productId, cartId },
    });
    if (cartRow) {
      const newAmount = cartRow.amount + amount;
      await db.cartRow.upsert({ amount: newAmount, productId: productId, cartId: cartId }, { where: { productId, cartId } });
    }
    else {
    await db.cartRow.create({
      amount: amount,
      productId: productId,
      cartId: cartId, 
    });}
    return createResponseMessage(200, "The product was added to the cart.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

function _formatCart(cart) {
  const cleanCart = {
    cartId: cart.id,
    createdAt: cart.createdAt,
    updatedAt: cart.updatedAt,
    customer: {
      id: cart.user.id,
      email: cart.user.email,
      firstName: cart.user.firstName,
      lastName: cart.user.lastName,
    },
  };

  if (cart.products) {
    cleanCart.products = [];
    
    cart.products.map((product) => {
      return (cleanCart.products = [
        {
          productId: product.id,
          title: product.title,
          amount: product.cartRow.amount,
          price: product.cartRow.amount * product.price,
          imageUrl: product.imageUrl
        },
        ...cleanCart.products
      ]);
    });
  }
  return cleanCart;
}

module.exports = { getAllCarts, getCart, createCart, updateCart, destroyCartRow
, addProductToCart };