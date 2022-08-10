module.exports = function reverse (n) {
    // let result = 0;
    // while (n) {
    //     result = result * 10 + n % 10;
    //     n = Math.floor(n / 10);
    // }
    // return result;

    const result = parseFloat(
        n.toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(n);

    return Math.abs(result);
}
