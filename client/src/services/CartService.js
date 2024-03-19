import axios from './api';

export async function getAll(endpoint = '/carts') {
  try {
    const response = await axios.get(endpoint);
    if (response.status === 200) return response.data;
    else {
      console.log(response);
      return [];
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function getOne(userId) {
  try {
    const response = await axios.get("/carts", userId);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function create(product) {
  try {
    const response = await axios.post('/products', product);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function update(product) {
  try {
    const response = await axios.put('/products', product);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function remove(id) {
  try {
    const response = await axios.delete('/products', { data: { id } } );
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

export async function getRating(productId, rating) {
  try {
    const response = await axios.get(`/products/${productId}`);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }

}

