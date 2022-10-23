# The Most Generic, Boring Package
### A general purpose, generic, boring package. 
---
## Documentation
I made this package for my convenience so I wouldn't have to keep on recoding stuff I need.

## String Functions
> String.prototype.toBinary()
```js
const String - "Hello World!"
console.log(String.toBinary())
// Expected Output: "1001000 1100101 1101100 1101100 1101111 100000 1010111 1101111 1110010 1101100 1100100 100001"
```

> String.prototype.similarity(string)
```js
const String - "Hello World!"
console.log(String.similarity("Heylo Worldz!"))
// Expected Output: 0.92
```

> > String.prototype.isPalindrome()
```js
const String - "racecar"
console.log(String.isPalindrome())
// Expected Output: true
```

> > String.prototype.replaceAt(start, end, string)
```js
const String - "Hello World!"
console.log(String.replaceAt(6, 13, 'Moon!'))
// Expected Output: "Hello Moon!"
```




<br><br />

## Math Functions

> Math.IsInCircle(circle = [ x, y, radius ], target = [ x, y ])
```js
const circle = [0,0, 5]
const point = [-2, 4]

console.log(Math.isInCircle(circle, point));
// Expected Output: false
```
> Math.clamp(number, min, max)
```js
console.log(Math.clamp(12, 4, 10))
// Expected Output: 10
```
> Math.distanceOfPoints([ x1, y1 ], [ x2, y2 ])
```js
console.log(Math.distanceOfPoints([ 10, -2 ], [ 15, -7.5 ]))
// Expected Output: 5
```
> Math.slope([ x1, y1 ], [ x2, y2 ])
```js
console.log(Math.slope([ 10, -2 ], [ 15, -7.5 ]))
// Expected Output: -1.1
```
> Math.randomFromRange(min, max)
```js
console.log(Math.randomFromRange(6, 20))
// Expected Output: 7.611526702311742
```

> Math.randomIntFromRange(min, max)
```js
console.log(Math.randomIntFromRange(6, 20))
// Expected Output: 13
```




<br><br />

## Array Functions

> Array.prototype.sum()
```js
let myArray = [ 1, 2, 3 ]
console.log(myArray.sum())
// Expected Output: 6
```

> Array.prototype.difference()
```js
let myArray = [ 1, 2, 3 ]
console.log(myArray.product())
// Expected Output: 6
```

> Array.prototype.product()
```js
let myArray = [ 1, 2, 3 ]
console.log(myArray.product())
// Expected Output: 6
```

> Array.prototype.average()
```js
let myArray = [ 0, 10 ]
console.log(myArray.average())
// Expected Output: 5
```

> Array.prototype.superFlat()
```js
let myArray = [ 0, [[1]], [2, ["Hello!", []], "World!"] ]
console.log(myArray.superFlat())
// Expected Output: [ 0, 1, 2, 'Hello!', 'World!' ]
```

> Array.prototype.smallest()
```js
let myArray = [5, 2, 1, 9, 4, 7, 7, -1]
console.log(myArray.smallest())
// Expected Output: -1
```

> Array.prototype.largest()
```js
let myArray = [5, 2, 1, 9, 4, 7, 7, -1]
console.log(myArray.largest())
// Expected Output: 9
```

> Array.prototype.dupe()
```js
let myArray = ["Luara", "Yanny", "Mike", "Luara", "Manny"]
console.log(myArray.dupe())
// Expected Output: ["Luara", "Yanny", "Mike", "Manny"]
```

<br><br />

# General Purpose
> lerp(start, end, percentage)
```js
console.log(lerp(0, 2, 0.7))
// Expected Output: 1.4
```
> lorem(length)
```js
console.log(lorem(16))
// Expected Output: "consectetur ac purus, nunc metus, odio fringilla libero, cras semper vehicula sem convallis justo in metus "
```
> range(start, end, step)
```js
console.log(step(5, 20, 1))
// [ 5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
```

> repeat(function, iterations, start, step)
```js

repeat((index) => {
    console.log(index)
}, 100)
/* Expected Output: 
0
1
2
3
4
5...
*/
```

> randomName({ gender: "MALE | FEMALE | BOTH", lastName, length })
```js
const name = randomName({ 
    gender: "MALE",
    lastName: true,
})

console.log(name)
// Expected Output: "Nataly Butler"
```

> generateKey(length)
```js
const key = generateKey(25)
console.log(key)
// Expected Output: "dspd0XdSgXw0nUtwYdn6TC0HC"
```

<br><br />

# Neural Network
The Most Generic Package has a basic neural network algorithm for basic use. The neural network is a very bare bones feed-foward neural network. The core of the network is provided, but everything else will have to be coded by you. 

    What's included?
        - The Neural Network
        - Training algorithm
        - Demo training sets

     What's not included:
        - Basically everything else, you have to code the rest of it. (Like I said, very bare bones.)

Basic Syntax:

> AI that predicts the color based on RGB values (from 0 - 1)
```js 
import NeuralNetwork from './lib/neuralNetwork/network.js'
import TrainNetwork from './lib/neuralNetwork/train.js'

const trainingData = [
    { input: [1, 0, 0], output: 'Red' },
    { input: [0, 1, 0], output: 'Green' },
    { input: [0, 0, 1], output: 'Blue' },
    { input: [1, 1, 1], output: 'White' },
]

const brain = new NeuralNetwork([ 3, 9, trainingData.length ]); // First layer size must be the size of an input.
TrainNetwork(brain, trainingData, {
    iterations: 80000, // Default: 1000
    mutations: 0.1, // Default: 0.1
    log: true, // Default: false,
})

const input = [1,0,0] // Expected Output: "Red"
let answer = NeuralNetwork.feedFoward(input, brain)
answer = trainingData[answer.indexOf(Math.max(...answer))]['output'] 

console.log(answer);
// Output: "Red";
```

> In the training set, the input must always be an array of numbers, but what if you want to have a string as an input? You'd have to convert that string into binary and make that binary string into an array (remove the spaces). This package includes a string to binary converter for your use.

```js
import NeuralNetwork from './lib/neuralNetwork/network.js'
import TrainNetwork from './lib/neuralNetwork/train.js'
import toBinary from './lib/toBinary.js';

const makeBinaryArray = (string) => string.toBinary().split('').map(e => +e)

const trainingData = [
    { input: makeBinaryArray('0+0'), output: 0 },
    { input: makeBinaryArray('0+1'), output: 1 },
    { input: makeBinaryArray('1+0'), output: 1 },
    { input: makeBinaryArray('1+1'), output: 2 },
]

const brain = new NeuralNetwork([ 18, 9, trainingData.length ]);
TrainNetwork(brain, trainingData, {
    iterations: 1e+6,
    mutations: 0.1,
    log: true,
})

const input = makeBinaryArray('0+1') // Expected Output: 1
let answer = NeuralNetwork.feedFoward(input, brain)
answer = trainingData[answer.indexOf(Math.max(...answer))]['output']

console.log(answer);
// output: 1
```

This algorithm is good enough for small data sets but is not recommended for large projects.


#### -Made with ❤️ by AJ. 



    Release Notes:

        - Inital Release (v1.0.0):
            - First public release
            - Expect lot of issues and bugs 