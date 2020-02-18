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

module.exports = async (toAddress, amount, tokenId, from, fromAddress) => {
  const response = await fetch(
    apiURL + `/contracts/${CONTRACT_ADDRESS}/transfer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `${KALEIDO_AUTH_USERNAME}:${KALEIDO_AUTH_PASSWORD}`
        ).toString("base64")}`
      },
      body: JSON.stringify({
        toAddress,
        amount,
        fromAddress
      })
    }
  );

  const data = await response.json();

  return data.status;
};
