import './randomIntFromRange.js'
const possibleChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const l = possibleChars.length

export default function generateKey(len = 25) {
    let s = ''
    for (let i = 0; i < len; i++) {
        s += possibleChars[Math.randomIntFromRange(0, l)]
    }

    return s
}