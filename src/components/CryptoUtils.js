import crypto from 'crypto';

export function generateKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });
  return { publicKey, privateKey };
}

export function encryptMessage(message, publicKey) {
  const buffer = Buffer.from(message, 'utf8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
}

export function decryptMessage(encryptedMessage, privateKey, senderPublicKey) {
  const buffer = Buffer.from(encryptedMessage, 'base64');
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey,
      passphrase: '',
    },
    buffer
  );
  return decrypted.toString('utf8');
}