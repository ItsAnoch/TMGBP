export default Math.randomFromRange = function(min, max) {
    return  Math.random() * (max - min) + min;
}