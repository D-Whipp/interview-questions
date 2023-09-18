// Source Video
// https://www.youtube.com/watch?v=kz_vwAF4NHI

// Synchronous Examples:
// *********************
// Example using setTimeout
const logHello = () => {
    console.log('Hello');
};

setTimeout(logHello, 2000);

// Example using forEach
const animals = ['dog', 'cat', 'chicken', 'duck'];

animals.forEach((animal) => console.log(animal));

// Custom Example
// This is taking a dissection of forEach
// here we are defining a function that
// takes in two parameters, an array and
// a callback iterates through each element,
// that calls the callback
const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element); // calling the callback here
    }
};

myForEach(animals, (animal) => {
    console.log(animal);
});

// Asynchronous Example:
// *********************
const loadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => {
            cb(data);
        });
};

loadPokemon(56, (pokemon) => {
    console.log(pokemon);
});
