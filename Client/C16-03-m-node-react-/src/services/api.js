const url = "https://c16-03-m-node-react.onrender.com";

async function signIn({ formData }) {
  return fetch(`${url}/auth/signin`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
}

async function getProductData({ id }) {
  try {
    const response = await fetch(`${url}/product/getOneProduct`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        productId: id,
      }),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function sendToFirstBase({ token, id, status }) {
  return fetch(`${url}/product/sendProduct`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId: id,
      status: status,
    }),
  }).then((res) => res.json());
}

async function updateProductState({ token, id, status }) {
  return fetch(`${url}/product/receiveProduct`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId: id,
      status: status,
    }),
  }).then((res) => res.json());
}

async function testBackend() {
  const response = await fetch(`${url}/test`).then((res) => res.json());
  return response;
}

export default {
  signIn,
  testBackend,
  getProductData,
  sendToFirstBase,
  updateProductState,
};
