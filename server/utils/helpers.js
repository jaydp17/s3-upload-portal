import path from 'path';

// eslint-disable-next-line import/prefer-default-export
export function appendRandomSuffix(filename, suffix) {
  const extension = path.extname(filename);
  const rawFileName = path.basename(filename, extension);
  return `${rawFileName}-${suffix}${extension}`;
}
