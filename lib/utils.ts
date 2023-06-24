import { compare, hash } from "bcryptjs"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateProxyUsername(): string {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const randomString = Array.from(
    { length: 10 },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("")
  return `pin_${randomString}`
}

export function generateProxyPassword(): string {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const randomString = Array.from(
    { length: 20 },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("")
  return randomString
}

export function getRandomValueFromArray(array: any): string {
  if (array.length === 0) {
    return ""
  }

  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex].value
}

export const normalizeName = (name: string) => {
  const nameParts = name.split(" ")
  const capitalizedName = nameParts
    .map((namePart) => {
      return namePart.charAt(0).toUpperCase() + namePart.slice(1).toLowerCase()
    })
    .join(" ")
  return capitalizedName
}

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12)
  return hashedPassword
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword)
  return isValid
}
