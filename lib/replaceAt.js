export default String.prototype.replaceAt = function(start = Number, end = Number, replaceValue = String) {
    return this.substring(0, start) + replaceValue + this.substring(end, this.length)
}