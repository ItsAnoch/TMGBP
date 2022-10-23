export default Math.clamp = function(num, min, max) {
    if (num > max) return max;
    if (num < min) return min;  
    return num;
}