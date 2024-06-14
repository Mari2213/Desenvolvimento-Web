var integer = 6;
var float = 6.66;
var hex = 0xf00d;
var binary = 666;
var octal = 484;
var negZero = -0;
var actuallyNumber = NaN;
var largestNumber = Number.MAX_VALUE;
var mostBiglyNumber = Infinity;
var menbers = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber,
];
menbers[0] = 12345;
console.log(menbers);
