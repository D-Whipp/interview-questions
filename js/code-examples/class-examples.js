// Classes can be defined as function expressions or function declarations
// Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]

// Expression; the class is anonymous but assigned to a variable
const Rectangle2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Expression; the class has its own name
const Rectangle3 = class Rectangle4 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};


let x = 'hello world';
console.log(typeof x)