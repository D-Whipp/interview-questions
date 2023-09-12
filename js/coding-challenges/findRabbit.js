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
console.log('Rabbit: ', rabbit);

const generateRabbit = () => {
    if (localStorage.getItem('rabbit')) {
        console.log('You already have a rabbit: ', rabbit);
        return;
    } else {
        rabbit = Math.floor(Math.random() * 10);
        localStorage.setItem('rabbit', rabbit);
        console.log('Rabbit created at hole: ', rabbit);
    }
};

const moveRabbit = (rabbit) => {
    let elusiveMove = Math.floor(Math.random() * 2);
    console.log(elusiveMove);
    console.log(rabbit);

    if (elusiveMove === 0) {
        if (parseInt(rabbit) < 1) {
            return;
        }
        rabbit = parseFloat(rabbit) - 1;
        localStorage.setItem('rabbit', rabbit);
        console.log(rabbit);
    } else if (elusiveMove === 1) {
        if (parseInt(rabbit) > 8) {
            return;
        }
        rabbit = parseFloat(rabbit) + 1;
        localStorage.setItem('rabbit', rabbit);
        console.log(rabbit);
    }
};

const looking = (holes, rabbit) => {
    console.log('holes: ', typeof holes.length);
    console.log('rabbit: ', typeof parseInt(rabbit));

    for (let i = 0; i < holes.length; i++) {
        if (parseInt(i) === parseInt(rabbit)) {
            console.log('Found the rabbit at: ' + rabbit);
        }
    }
};

generateRabbit();
looking(holes, rabbit);
moveRabbit(rabbit);
