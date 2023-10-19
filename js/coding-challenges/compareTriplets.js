let a = [1, 2, 3];
let b = [3, 2, 1];

function compareTriplets(a, b) {
    let resultA = 0;
    let resultB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            resultA++;
        } else if (a[i] < b[i]) {
            resultB++;
        }
    }

    return [resultA, resultB];
}

compareTriplets(a, b);
