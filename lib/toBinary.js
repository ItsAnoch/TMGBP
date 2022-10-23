export default String.prototype.toBinary = function() {
    let string = this
    let binary = string.split('').map(function(char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');

    return binary
}