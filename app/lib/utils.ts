import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const isDevelopment = process.env.NODE_ENV === "development";
const basePath = isDevelopment ? "" : "/website";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function assetPath(path: string): string {
    return `${basePath}${path}`;
}

export { basePath };
