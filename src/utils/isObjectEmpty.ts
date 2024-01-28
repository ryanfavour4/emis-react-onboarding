/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
export function isObjectEmpty(obj: any): boolean {
    if (obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false; // If the object has any own property, it's not empty
            }
        }
    }
    return true; // If no own properties are found, the object is empty
}
