const isDevelopment = process.env.NODE_ENV === 'development';
const basePath = isDevelopment ? '' : '/website';

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}

export { basePath };
