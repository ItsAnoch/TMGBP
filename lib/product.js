export default Array.prototype.product = function() {
    return this.reduce((a, b) => a * b, 1)
}
