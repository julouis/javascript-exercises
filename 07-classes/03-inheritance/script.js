/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }


    class Cat extends Animal {
        constructor(name, greeting) {
            super(name,greeting);
            this.name=name;
            this.constructor.greeting="Hello";
        }
    }

    class Dog extends Animal {
        constructor(name, greeting) {
            super(name,greeting);
            this.name=name;
            this.constructor.greeting="Bonjour";
        }
    }

    var cat = new Cat ("Jean le chat")
    var dog = new Dog ("Doge le doge")

    document.getElementById("run").addEventListener("click", function() {

       console.log(cat.sayHello())
       console.log(dog.sayHello())

    })

    // your code here
})();
