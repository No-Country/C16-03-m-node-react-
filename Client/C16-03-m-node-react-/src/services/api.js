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

async function getProducts() {
  try {
    const response = await fetch(`${url}/product/getAllProducts`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getProductData({ id }) {
  return fetch(`${url}/product/getOneProduct`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      productId: id,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
}

const postNewShipment = async (shipment, token) => {
  return fetch(`${url}/product/createProduct`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(shipment),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
};

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

async function register({ name, email, password }) {
  return fetch(`${url}/auth/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      lastName: "Cliente",
      email,
      password,
      role: "user",
    }),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
}

async function getClientProducts({ token }) {
  return fetch(`${url}/product/findClientProducts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
}

async function testBackend() {
  const response = await fetch(`${url}/test`).then((res) => res.json());
  return response;
}

export default {
  signIn,
  testBackend,
  getProductData,
  postNewShipment,
  sendToFirstBase,
  updateProductState,
  register,
  getProducts,
  getClientProducts,
};
