export default Array.prototype.largest = function() {
    return Math.max.apply(null, this)
}