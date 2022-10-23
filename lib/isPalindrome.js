export default String.prototype.isPalindrome = function() {
    const s = this.toLowerCase().split("")
    return s.join("") == s.reverse().join("")
}