import boyNames from "../data/names/boyNames.js"
import girlNames from "../data/names/girlNames.js"
import lastNames from "../data/names/lastNames.js"

import './randomIntFromRange.js'

const errorHandling = ( gender, lastName, length ) => {
    switch(true) {
        case (!gender.match(/(MALE|FEMALE|BOTH)/g)):
            gender = 'BOTH'
            throw new Error('Gender choice invalid! Valid choices are: MALE, FEMALE or BOTH. Reverted input back to default (BOTH)');
        case (typeof lastName != 'boolean'):
            lastName = true
            throw new Error('lastName must be a Boolean! Reverted input back to default (True)')
        case (typeof length != 'number'):
            length = 2
            throw new Error('Name length must be a number! Reverted input back to default (2)')
        case (length < 0):
            length = 2
            throw new Error('Name length must be a integer greater than 0! Reverted input back to default (2)')
        case (!isFinite(length) || length > 1000000):
            length = 5000
            throw new Error('Name length must be a finite integer! Reverted input to highest (99999)') 
        case (length % 1 != 0):
            length = Math.round(length)
            throw new Error(`Name length must be a finite integer! Reverted input to highest (${length})`) 
    }
}

export default function randomName(defaults = { gender: 'BOTH', lastName: true, length: 2 }) {
    defaults = {
        gender: defaults['gender'] ?? 'BOTH',
        lastName: defaults['lastName']  ?? true,
        length: defaults['length'] ?? 1,
    }

    let { gender, lastName, length } = defaults

    // Error handling
    errorHandling(gender, lastName, length)

    const possibleNames = 
        gender.match(/BOTH/g) ? [...girlNames, ...boyNames] :
        gender.match(/FEMALE/g) ? girlNames : girlNames;

    let currentName = ''
        
    for (let i = 0; i < length; i++) {
        currentName += possibleNames[
            Math.randomIntFromRange(0, possibleNames.length)
        ] + ' '
    }
 
    return lastName ? `${currentName}${lastNames[Math.randomIntFromRange(0, lastNames.length)]}`  : currentName
}