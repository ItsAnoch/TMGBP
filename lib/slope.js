export default Math.slope = function(v1 = new Array(2), v2 = new Array(2)) {
    const y = (v2[1] - v1[1]),
          x = (v2[0] - v1[0]);
    return (y/x)
}