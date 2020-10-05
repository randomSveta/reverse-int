module.exports = function reverse(n) {
    let number = Math.abs(n);
    let reversedNumber = 0;

    while (number > 0) {
        let lastPart = number % 10
        number = Math.floor(number / 10);
        reversedNumber = (reversedNumber * 10) + lastPart;
    }

    return reversedNumber;
}
