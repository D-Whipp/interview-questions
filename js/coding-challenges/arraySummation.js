let passArray = [1, 4, 5, 2];


function aVeryBigSum(ar) {
    let bigNumber = BigInt('0');
    let sumArray = ar;
    console.log(sumArray);

    for (let i = 0; i < sumArray.length; i++) {
        // for (var num of ar) {
        bigNumber += BigInt(sumArray[i]);
        // bigNumber += BigInt(num);
        console.log(bigNumber);
    }

    // BigInt(bigNumber);
    // bigNumber += 'n';
    console.log(typeof bigNumber);
    console.log(bigNumber);
    
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
