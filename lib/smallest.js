export default Array.prototype.smallest = function() {
    return Math.min.apply(null, this)
}