// Comment Formatting
/**
 * Basic
 * ? Blue
 * * Light Green
 * TODO Orange
 * ! Red
 */

// #region Array Methods
// ! METHODS 
let arrayMethods = ['March', 'Jan', 'Feb', 'Dec'];
let arrayMethodsNum = [1,2,3,4];

// * SORT
arrayMethods.sort();

// * REVERSE
arrayMethods.reverse();

// * REVERSE SORT
arrayMethods.sort().reverse();

// * INCLUDES
arrayMethods.includes('valueToCheck');

// * EVERY
arrayMethods.every(item => item < 40);

// * REDUCE
// * The "0" is the initial value
const sumWithInitialValue = arrayMethodsNum.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0  
);

// #endregion

// #region Functions
// ! FUNCTIONS
// * Default Parameter Value
function greeting(name = 'stranger') {
    return `Hello ${name}`;
}
// #endregion

// #region Function Expressions
// ! FUNCTION EXPRESSION
// * Create the function
const functionExpressionTest = function(para1, para2) {
    return para1 + para2;
}

// * Call the function
functionExpressionTest(1,2);

// * Arrow Function - shorthand way to write
const functionExpressionTestShortHand = (para1, para2) => {
    return para1 + para2;
}

// * Assign Function to Variable
const short = functionExpressionTestShortHand;

// * Call Function assigned to variable
short();

// * Return name of Function assigned to variable
short.name;

// * Calling a function within a higher-order function (callback function)
const higherOrderFunc = param => {
    param(); // Call the input parameter here
    return `I just invoked ${param.name} as a callback function`;
}
const anotherHighOrderFunc = () => {
    return `I'm being invoked by the higher order function`;
}
higherOrderFunc(anotherHighOrderFunc);

// #endregion

// #region Iterators
const iteratorArray = ['mango', 'papaya', 'pineapple', 'apple'];
const iteratorNumArray = [1,2,3,4];

// * FOR EACH
iteratorArray.forEach(function(arrayItem) {
    console.log(arrayItem);
});

// * FOR EACH, ARROW FUNCTION
iteratorArray.forEach(arrayItem => console.log(arrayItem));

// * FOR EACH, PRIOR FUNCTION DECLARATION
function printItem(element) {
    console.log(element);
}
iteratorArray.forEach(printItem);

// * MAP, copies Array to a new Array. Returns a new array
const newMapArray = iteratorArray.map(x => x);

// * MAP alternative
const newMapArray2 = iteratorArray.map(valuee => {
    return valuee;
});

// * MAP IF ELSE, ternary operator return statement
const newMapArray3 = iteratorArray.map(value => {
    return value === 'apple' ? 'Windows' : value;
});

// * FILTER, returns a new array base on the applied filter
const filterShortWords = iteratorArray.filter(word => {
    return word.length > 5;
    // Returns an array of words with a length greater than 5
});

// * FILTER, short hand
const filterShortWordsShort = iteratorArray.filter(word => word.length > 5);

// * FIND INDEX, returns the index of the first value to evaluate to true
const findIndexOfValue = (item) => item === 'apple';
console.log(iteratorArray.findIndex(findIndexOfValue));

// * FIND INDEX alternative
function findMyKeys(input) {
    return input.findIndex(word => word.includes('keys'));
}

// * REDUCE
const initialValue = 0;
const reduceSumArray = iteratorNumArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
);

// #endregion

// #region Object Literals
// ! OBJECT LITERALS
// * Created with {}
// * Filled with key : value pairs
let objectLiteralTest = {
    color: silver,
    'Fuel Type': 'diesel',
    activate() {
        // Do the thing
    },
    engine: {
        computer: {
            RAM: '4gb'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
};

// * Access property of object
objectLiteralTest.color; // Returns value of color

// * Bracket Notation for access
objectLiteralTest['color']; // Returns value of color

// * Change key value
objectLiteralTest.color = 'red';

// * Add key value 
objectLiteralTest.size = 'large';

// * Delete key value pair
delete objectLiteralTest.size;

// * Object Method : a function that's part of an object
objectLiteralTest.activate();

// * Accessing Nested Objects
objectLiteralTest.engine['back-up'].battery; // Returns 'Lithium'
// #endregion

// #region Objects Adv
// ! THIS
// * Used to access the calling object's properties 
const goat = {
    dietType: 'herbivore',
    diet() {
        return this.dietType;
    }
}

// ! GETTERS SETTERS
// * Used to get object properties
// * Use a function as a key in the object
const robot = {
    _model: 100,
    get model() {
        return this._model;
    },
    set model(input) {
        this._model = input;
    }
}

// * Call the setter method
robot.model = '120';

// ! SORT ARRAY OF OBJECTS BY OBJECT VALUE
const speciesArray = [ 
    {speciesName:'shark', numTeeth:50}, 
    {speciesName:'dog', numTeeth:42}, 
    {speciesName:'alligator', numTeeth:80}, 
    {speciesName:'human', numTeeth:32}
];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)
sortSpeciesByTeeth(speciesArray);


// #endregion

// #region Classes
// ! CONSTRUCTOR
class Dog {
    // * Constructor creates a new instance of a class
    // * Methods are same as an object but no comma
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    // * Static methods can not be accessed by child classes
    // * Static methods can only be called by the class, not by instances
    // * Ex: Dog.generateName();
    static generateName() {
        const names = ['Joe', 'Mama', 'Bob', 'Uncle'];
        const randomName = Math.floor(Math.random()*4);
        return names[randomName];
    }
}

// ! Extend - inherit from the parent class
class Sheltie extends Dog {
    constructor(name, color) {
        super(name);
        this._color = color;
        // * Super calls the constructor in the parent class
        // * Call super items before "this" items
    }
}

// * Have to include "new" to create a new instance of the class
const halley = new Dog('Halley');

// #endregion

// #region

// #endregion