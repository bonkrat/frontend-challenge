const fetch = require("node-fetch");
const {
  KALEIDO_REST_GATEWAY_URL,
  KALEIDO_AUTH_USERNAME,
  KALEIDO_AUTH_PASSWORD,
  PORT,
  FROM_ADDRESS,
  CONTRACT_MAIN_SOURCE_FILE,
  CONTRACT_CLASS_NAME
} = require("../../../config");

const apiURL = `${KALEIDO_REST_GATEWAY_URL}/api/v1`;

const CONTRACT_ADDRESS = "0xd657426e3ef97331c70038b331a7e548aad76b99";

module.exports = async address => {
  const response = await fetch(
    apiURL + `/contracts/${CONTRACT_ADDRESS}/balanceOf/${address}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `${KALEIDO_AUTH_USERNAME}:${KALEIDO_AUTH_PASSWORD}`
        ).toString("base64")}`
      }
    }
  );

  const data = await response.json();

  return data.balance;
};
