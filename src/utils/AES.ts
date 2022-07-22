import CryptoJS from 'crypto-js';

// Encrypt
const ciphertext = (message: string, secretKey: string) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

// Decrypt
const decrypt = (message: string, secretKey: string) => {
  const bytes = CryptoJS.AES.decrypt(message, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export {ciphertext, decrypt};
