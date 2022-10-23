import './distanceOfPoints.js'

export default Math.isInCircle = function(circle = [x, y, radius], target = [x, y]) {
    const x1 = circle[0], y1 = circle[1];
    const x2 = target[0], y2 = target[1];
    const radius = circle[2]
    return Math.distanceOfPoints([x1, y1], [x2, y2]) > radius
}