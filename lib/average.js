export default Array.prototype.average = function() {
    return this.reduce((a, b) => a + b, 0) / this.length
}