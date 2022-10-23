import repeat from '../repeat.js'
import lerp from '../lerp.js'

export default class NeuralNetwork{
    constructor(neuronCounts) {
        this.levels = [];
        repeat((i) => {
            this.levels.push(new Level(
                neuronCounts[i], neuronCounts[i+1] == undefined ? neuronCounts[i] : neuronCounts[i+1]
            ))
        }, neuronCounts.length)
    }

    static feedFoward(givenInputs, network) {
        let outputs = Level.feedForward(
            givenInputs, network.levels[0]
        )

        repeat((i) => {
            outputs = Level.feedForward(outputs, network.levels[i])
        }, network.levels.length, 1)

        return outputs
    }

    static mutate(network, amount = 1) {
        network.levels.forEach(level => {
            repeat((i) => {
                level.biases[i] = lerp(
                    level.biases[i],
                    Math.random() * 2 -1,
                    amount
                )
            }, level.biases.length)

            repeat((i) => {
                repeat((j) => {
                    level.weights[i][j] = lerp(
                        level.weights[i][j],
                        Math.random() * 2 - 1  ,
                        amount
                    )
                }, level.weights[i].length)
            }, level.weights.length)
        })
    }
}

class Level{
    constructor(inputCount, outputCount) {
        this.inputs = new Array(inputCount)
        this.outputs = new Array(outputCount)
        this.biases = new Array(outputCount)

        this.weights = []

        repeat((i) => {
            this.weights[i] = new Array(outputCount)
        }, inputCount)

        Level.#randomize(this)
    }

    static #randomize(level) {
        repeat((i) => {
            repeat((j) => {
                level.weights[i][j] = Math.random() * 2 - 1
            }, level.outputs.length)
        }, level.inputs.length)

        repeat((i) => {
            level.biases[i] = Math.random() * 2 - 1
        }, level.biases.length)
    }

    static feedForward(givenInputs, level) {
        repeat((i) => {
            level.inputs[i] = givenInputs[i]
        }, level.inputs.length)

        repeat((i) => {
            let sum = 0
            repeat((j) => {
                sum += level.inputs[j]*level.weights[j][i]
            }, level.inputs.length)

            level.outputs[i] = sum

        }, level.outputs.length)

        return level.outputs
    }
}