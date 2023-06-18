/**
 * This TypeScript function generates a unique ID by combining a random string and the current date.
 * @returns A string value is being returned. The string is a combination of a random alphanumeric
 * string of length 9 and the current timestamp in base 36.
 */
export const generarId = ():string => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}