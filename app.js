const constructorFunctionExample = () => {
  console.log(
    'Using normal function notation, constructor functions are created!'
  );
  console.log('It is better not to use arrow functions!');
  console.log('The fields are set using this keyword!');
  console.log('There is no need to return!');
  console.log('During invoking , we have to use new keyword!');
  console.log('The object Person is displayed below!');
  function Person() {
    this.name = 'Somraj';
    this.age = 30;
    this.greet = () => {
      console.log(`I am ${this.name} and ${this.age} years old ! `);
    };
  }
  const personObject = new Person();
  personObject.greet();
  console.log('\n\n');
};

const classPrototypeExample = () => {
  console.log('Using ClassName.prototype we can go the parent class object : ');
  console.log('We can there create our fields and methods !');
  console.log('Prototype basically helps for inheritance !');
  console.log(
    'For every object, the by default prototype is Object.prototype !'
  );
  console.log('Every object will have __proto__ ');
  console.log('Every constructor function will have prototype ');
  function Person() {
    this.name = 'Somraj';
  }
  Person.prototype = {
    age: 33,
    printName() {
      console.log(this.name + ': ' + this.age);
    }
  };
  let person = new Person();
  person.printName();
  console.log('\n\n');
};

const classMethodShortHand = () => {
  console.log('In class, method created with shorthand makes all the methods');
  console.log('to be common in one object!');
  console.log(`Method Shorthand example is : 
    
  class Person {
    greet() {
      console.log("Hello World!");
    }
  }
  
  `);
  console.log('This does not affect performances !');
  class Person {
    greet() {
      console.log('Hello World!');
    }
  }

  console.log('\n\n');
  console.log('\n\n');
};

const classMethodArrowFunction = () => {
  console.log("arrow function in class is repeated in every object!");
  console.log("but that affects the performance");
  console.log(`arrow function example: 

  class Person {
    greet = () => {
      console.log('Hello World');
    };
  }

  `);
  
  
  class Person {
    greet = () => {
      console.log('Hello World');
    };
  }

  console.log('\n\n');
  console.log('\n\n');

};

constructorFunctionExample();
classPrototypeExample();
classMethodShortHand();
classMethodArrowFunction();
