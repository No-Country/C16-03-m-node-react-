const url = "http://localhost:3000";

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

async function testBackend() {
  const response = await fetch(`${url}/test`).then((res) => res.json());
  return response;
}

export default { signIn, testBackend, getProductData };
