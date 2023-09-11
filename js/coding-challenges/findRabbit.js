// Suppose you are a farmer with a beautiful garden
// An evil rabbit has snuck into your garden and has dug a hole under your prized carrots
// There are ten holes in a row where you know the rabbit is hidiing
// The rabbit is hiding in one of the holes
// The holes are connect via a tunnel
// Every time you check a hole the rabbit will move to a different hole
// Find the rabbit
// let rabbitHole ;

let rabbit = localStorage.getItem('rabbit');
console.log(rabbit);

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

generateRabbit();

// if (localStorage.getItem('rabbit')) {
//     let rabbit = Math.floor(Math.random() * 10);
//     localStorage.setItem('rabbit', rabbit);
//     console.log(rabbit);
// } else {
//     console.log('there');
// }

// const generateRabbitNumber = () => {
//     let rabbit = Math.floor(Math.random() * 10);
//     return (rabbitHole = rabbit);
// let rabbit = false;
// if (rabbit === false) {
//     rabbit = Math.floor(Math.random() * 10);
// } else {
//     return rabbit;
// }
// let rabbitHole = Math.floor(Math.random() * 10);
// if (rabbit !== undefined) {
//     return;
// }
// rabbitHole = Math.floor(Math.random() * 10);
// console.log(rabbitHole);
// console.log(rabbit);
// };

// generateRabbitNumber();

// console.log(rabbitHole);
