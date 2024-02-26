const url = "http://localhost:3000";

async function signUp({ formData }) {
  try {
    const response = await fetch(`${url}/auth/signup`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
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

export default { signUp, testBackend, getProductData };
