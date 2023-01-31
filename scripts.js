function calcSum() {
    let sum = 0;
    return function (i) {
        sum += i;
        return sum;
    };
};

let sum = calcSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
