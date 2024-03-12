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
    const allProducts = await db.post.findAll({
      include: [db.product, db.rating],
    });
    /* Om allt blev bra, returnera allProducts */
    return createResponseSuccess(allProducts.map((product) => product));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    await db.post.destroy({
      where: { id },
    });
    return createResponseMessage(200, "Produkten raderades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

export { getAllUsers, destroy };