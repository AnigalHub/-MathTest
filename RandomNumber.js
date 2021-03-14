function RandomNumber(min, max) {    // Рандом числа от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
module.exports = RandomNumber;
