import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  pbkdf2Sync,
} from "crypto";

// 暗号化アルゴリズムの設定
const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // GCMの推奨IV長
const SALT = "nextjs-salt"; // 固定ソルト
const ITERATIONS = 100000;
const KEY_LENGTH = 32; // 256 bits
const DIGEST = "sha256";
const AUTH_TAG_LENGTH = 16;

/**
 * 任意の文字列のキーから、32バイトのバッファを生成します
 * (SHA-256を通して常に32バイトの鍵にします)
 */
function getKey(secret: string): Buffer {
  return pbkdf2Sync(secret, SALT, ITERATIONS, KEY_LENGTH, DIGEST);
}

/**
 * 文字列を暗号化する関数
 * @param text 暗号化したい平文
 * @param secretKey 秘密鍵（任意の文字列）
 * @returns Base64エンコードされた「IV + 暗号文 + AuthTag」
 */
export function encrypt(text: string, secretKey: string): string {
  const key = getKey(secretKey);
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();

  // IVと暗号文を結合してBase64にする
  const combinedBuffer = Buffer.concat([iv, encrypted, authTag]);

  return combinedBuffer.toString("base64");
}

/**
 * 文字列を復号化する関数
 * @param encryptedBase64 encrypt関数で生成された文字列
 * @param secretKey 秘密鍵（暗号化時と同じもの）
 * @returns 復号された平文
 */
export function decrypt(encryptedBase64: string, secretKey: string): string {
  const key = getKey(secretKey);

  // Base64からバイナリに戻す
  const combinedBuffer = Buffer.from(encryptedBase64, "base64");

  // IVと暗号文を分離
  const iv = combinedBuffer.subarray(0, IV_LENGTH);
  const authTag = combinedBuffer.subarray(
    combinedBuffer.length - AUTH_TAG_LENGTH
  );
  const encryptedText = combinedBuffer.subarray(
    IV_LENGTH,
    combinedBuffer.length - AUTH_TAG_LENGTH
  );

  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);

  try {
    const decrypted = Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ]);

    return decrypted.toString("utf8");
  } catch {
    return "";
  }
}
