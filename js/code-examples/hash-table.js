// https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/

// Hash Tables are a data structure that allow you to create a list of paired values. You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.
// A Hash Table transforms a key into an integer index using a hash function, and the index will decide where to store the key/value pair in memory:
// You'll commonly use a Hash Table because of its fast search, insertion, and delete operations.

// JavaScript's Object type is a special kind of Hash Table implementation for two reasons:
// 1: It has properties added by the Object class. Keys you input may conflict and overwrite default properties inherited from the class.
// 2: The size of the Hash Table is not tracked. You need to manually count how many properties are defined by the programmer instead of inherited from the prototype.

// Since you can overwrite object prototype methods you may run into errors when calling object  properties.

// To handle these short comings JavaScript created another implementation of the Hash Table data structure which is called Map

// Just like Object, Map allows you to store key-value pairs inside the data structure. Here's an example of Map in action:

const artifacts = new Map();

artifacts.set('Nathan', '555-0182');
artifacts.set('Jane', '555-0182');

console.log(artifacts.get('Nathan')); // 555-0182
console.log(artifacts.size); // 2

// Unlike the Object type, Map requires you to use the set() and get() methods to define and retrieve any key-pair values that you want to be added to the data structure.

// You also can't overwrite Map inherited properties. For example, the following code tried to overwrite the size property value to false:

const collection = new Map();

collection.set('Nathan', '555-0182');
collection['size'] = false;

console.log(collection.get('size')); // undefined
console.log(collection.size); // 1

const music = new Map();

music.set('Red', 'Start Again');
music.set('Skillet', 'Comatose');
music.set('Blindside', 'Pitiful');

console.log(music);
console.log(music.get('Blindside'));
console.log(music.size);

const games = new Map();

games.set('Square Enix', 'Final Fantasy');
games.set('Bethesda', 'Elder Scrolls');
games.set('Sucker Punch', 'Ghost of Tsushima');
games.set('Nether Realms Studio', 'Mortal Kombat');

console.log(games);
console.log(games.get('Sucker Punch'));
console.log(games.size);
