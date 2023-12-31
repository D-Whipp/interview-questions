// Suppose you are a farmer with a beautiful garden
// An evil rabbit has snuck into your garden and has dug a hole under your prized carrots
// There are ten holes in a row where you know the rabbit is hidiing
// The rabbit is hiding in one of the holes
// The holes are connect via a tunnel
// Every time you check a hole the rabbit will move to a different hole
// Find the rabbit
// let rabbitHole ;

const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let rabbit = localStorage.getItem('rabbit');
let look = 0;
let found = true;

const generateRabbit = () => {
    if (localStorage.getItem('rabbit')) {
        return;
    } else {
        rabbit = Math.floor(Math.random() * 10);
        localStorage.setItem('rabbit', rabbit);
    }
};

const moveRabbit = (rabbit) => {
    let elusiveMove = Math.floor(Math.random() * 2);

    if (elusiveMove === 0) {
        if (parseInt(rabbit) < 1) {
            return;
        }
        rabbit = parseFloat(rabbit) - 1;
        localStorage.setItem('rabbit', rabbit);
    } else if (elusiveMove === 1) {
        if (parseInt(rabbit) > 8) {
            return;
        }
        rabbit = parseFloat(rabbit) + 1;
        localStorage.setItem('rabbit', rabbit);
    }
};

const looking = (holes, rabbit, found) => {
    console.log('holes: ', typeof holes.length);
    console.log('rabbit: ', typeof parseInt(rabbit));

    while (found) {
        moveRabbit(rabbit);
        console.log(rabbit);
        moveRabbit(rabbit);
        for (let i = 0; i < holes.length; i++) {
            console.log('Looking in hole: ', i);
            if (parseInt(i) === parseInt(rabbit)) {
                console.log('Found the rabbit at: ' + rabbit);
                found = false;
                return;
            }
        }
    }
};

generateRabbit();
looking(holes, rabbit, found);
