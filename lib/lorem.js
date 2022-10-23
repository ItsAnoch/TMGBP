import loremWords from "../data/loremWords.js";
const loremSize = loremWords.length

import randomIntFromRange from "./randomIntFromRange.js";

export default function lorem(len) {
    let str = ''
    for (let i = 0; i < len; i++) {
        str += loremWords[
            Math.randomIntFromRange(0, loremSize)
        ] + " "
    }

    return str
}