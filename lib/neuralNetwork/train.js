import NeuralNetwork from "./network.js"

export default function TrainNetwork(network, trainingData, data = { iterations: 1000, mutations: 0.1, log: false  }) {
    let thresh = 1,
        minThresh = 0,
        bestBrain = network;

    const { iterations, mutations, log } = data

    for (let iteration = 0; iteration < iterations; iteration++) {
        let total = 1

        trainingData.forEach((e, i) => {
            const input = e['input']

            const answer = NeuralNetwork.feedFoward(input, network)
            const answerIndex = answer.indexOf(Math.max(...answer))

            if (answer.includes(NaN)) return;

            const t = answerIndex == i
            if (t) {
                total++
            };
        })

        const error = total/trainingData.length

        if (error > minThresh) {
            bestBrain = network
            minThresh = error
            log == true ? console.log(`Iteration: ${iteration}, Confidence: ${error}, Progression: ${(iteration/iterations)*100}%`) : false;
        }

        if (error < thresh) {
            NeuralNetwork.mutate(network, mutations)
        }

        total = 0
    }

    return bestBrain
}