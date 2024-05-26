const lighthouse = require('@lighthouse-web3/sdk');

async function main() {
  const apiKey = "7802fed8.6577b4f40c74435493704c05b06be2b1";
  const uploadResponse = await lighthouse.upload('./', apiKey);

  const cid = uploadResponse.data.Hash;
  console.log(`Uploaded to IPFS : ${cid}`);