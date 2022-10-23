export default Math.distanceOfPoints = function(v1 = [x = Number, y = Number], v2 = [x = Number , y = Number]) {
    const x = (v2[0] - v1[0]),
          y = (v2[1] - v1[1])
    return Math.sqrt((x*x)+(y*y))
}