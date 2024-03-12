const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

async function getAllCarts() {
  try {
    const allCarts = await db.cart.findAll();
    /* Om allt blev bra, returnera allProducts */
    return createResponseSuccess(allCarts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getCart(id) {
    try {
        const cart = await db.cart.findOne({
        where: { id },
        });
        return createResponseSuccess(cart);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function addToCart(cart) {
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

async function destroyCart(id) {
    if (!id) {
      return createResponseError(422, "Id är obligatoriskt");
    }
    try {
      await db.cart.destroy({
        where: { id },
      });
      return createResponseMessage(200, "Kundvagnen raderades.");
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

module.exports = { getAllCarts, getCart, addToCart, updateCart, destroyCart};