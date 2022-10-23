export default Array.prototype.superFlat = function() {
    return this.flat(Infinity)
}