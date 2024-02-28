export interface IEcryptService {
  encodePassword(password: string): string;
  authPassword(word: string, passwordEncode: string): boolean;
}
