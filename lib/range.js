export default function range(s1, s2, step = 1) {
    step = s1 > s2 ? -Math.abs(step) : step; 
    return Array(Math.ceil((s2 - s1) / step)).fill(s1).map((x, y) => x + y * step)
}