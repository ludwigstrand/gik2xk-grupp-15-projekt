import axios from './api';

export async function getOne(id) {
  try {
    const response = await axios.get(`/carts/${id}`);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function addToCart(amount, productId, userId) {
  try {
    const response = await axios.post('/carts/addProduct/', { amount: amount, productId: productId, userId: userId });
    if (response.status === 200) return response.data;
    else {
      console.log(data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function removeProductFromCart(productId, cartId) {
  try {
    const response = await axios.delete(`carts/${cartId}`, { data: { productId } 
    });
    if (response.status === 200) return response.data;
    else {
      console.log(data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

