/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-let */
/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/immutable-data */
import { stringify } from 'qs';

export const safeArray = (array: Record<string, string>[]) =>
  array && Array.isArray(array) && array.length > 0;

export const safeMapString = (array: Record<string, string>[], attr: string) =>
  array
    .map((x) => (x[attr] && x[attr] !== '' ? x[attr] : undefined))
    .filter((x) => x !== undefined);

export const safeObject = (obj: Record<string, string>) =>
  obj && typeof obj === 'object' && Object.keys(obj).length > 0;

export const createQuery = (obj: Record<string, string>) =>
  stringify(obj, { skipNulls: true });

export const waterFallExec = async (
  fnPromises: (index: number) => Promise<any>,
  numberOfIndex = 0
) =>
  new Promise((resolve, reject) => {
    const tmp = Array(numberOfIndex).fill('');
    const __itResp = tmp.reduce(async (prev, _, idx) => {
      await prev;
      if (fnPromises && typeof fnPromises === 'function')
        return await fnPromises(idx);
      reject(`Missing promises`);
    }, Promise.resolve());
    resolve(__itResp);
  });

export function xorEncryptDecrypt(input, key) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i) ^ key;
    output += String.fromCharCode(charCode);
  }
  return output;
}
