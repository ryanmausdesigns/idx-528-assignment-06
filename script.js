const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiple = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

const square = (x) => {
    return x * x;
};

const cube = (base) => {
    let answer = 1;

    for (i = 0; i < 3; i++) {
        answer = answer * base
    }
    return answer;
};

const power = (base, exponent) => {
    let answer = 1;

    for (i = 0; i < exponent; i++) {
        answer = answer * base
    }
    return answer;
};

const modulo = (number, divisor) => {
    let modulo = number %= divisor;
    return modulo;
};

const squareRoot = (number) => {
    for (var i = number; i >= 1; i--) {
        (i * i === number ) 
            number = i;
        return number;
        }
};

const cubeRoot = (number) => {
    for (var i = number; i >= 1; i--) {
        if (i * i * i === number ) {
            cuberoot = i;
        return cuberoot;
        }
    }
};




const factorial = (n) => {
    if (n < 2) {
        return 1;
    }
    return n * fac(n - 1);
};