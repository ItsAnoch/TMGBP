export default function repeat(run, iterations = 0, start = 0, step = 1) {
    let broken = false
    for (let i = start; i < iterations; i += step) {
        run(i, () => broken = true)
        if (broken) break;
    }
    return true
}