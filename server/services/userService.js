const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const validate = require("validate.js");

const constraints = {
  title: {
    length: {
      minimum: 2,
      maximum: 100,
      tooShort: "^Titeln måste vara minst %{count} tecken lång.",
      tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
    },
  },
};

async function getAllUsers() {
  try {
    const allUsers = await db.user.findAll();
    return createResponseSuccess(allUsers);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(user) {
  const invalidData = validate(user, constraints);
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newUser = await db.user.create(user);

    return createResponseSuccess(newUser);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(user, id) {
  const invalidData = validate(user, constraints);
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingUser = await db.user.findOne({ where: { id } });
    if (!existingUser) {
      return createResponseError(404, "Hittade ingen användare att uppdatera.");
    }
    await db.user.update(user, {
      where: { id },
    });
    return createResponseMessage(200, "Användaren har uppdaterats.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    await db.user.destroy({
      where: { id },
    });
    return createResponseMessage(200, "Användaren raderades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getUserCart(userId) {
  try {
    const user = await db.user.findOne({ where: { id: userId } });
    const allCarts = await user.getCarts({ include: [db.user] });
    return createResponseSuccess(allCarts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = { getAllUsers, create, update, destroy, getUserCart };
