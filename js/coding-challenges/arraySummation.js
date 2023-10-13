let passArray = [1, 4, 5, 2];

let bigNumber = 0;

function aVeryBigSum(ar) {
    let sumArray = ar;
    console.log(sumArray);

    for (let i = 0; i < sumArray.length; i++) {
        bigNumber += sumArray[i];
        console.log(bigNumber);
    }

    BigInt(bigNumber);
    // bigNumber += 'n';
    console.log(typeof bigNumber);
    return bigNumber;
}

aVeryBigSum(passArray);

let sum = BigInt('0');

function theirCode(ar) {
    for (var num of ar) {
        sum += BigInt(num);
    }
    console.log(sum);
    return sum;
}

theirCode(passArray);

function compareResults(a, b) {
    if (a === b) {
        console.log('true');
        return;
    }
    console.log('false');
}

console.log(typeof bigNumber);
console.log(typeof sum);

compareResults(bigNumber, sum);
