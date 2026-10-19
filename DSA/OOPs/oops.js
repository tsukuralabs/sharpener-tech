class Car {
    // constructor is used to initialise the attributes of an object
    constructor(color, speed, tyres) {
        this.color = color;
        this.speed = speed;
        this.tyres = tyres;
    }
    // creating a function
    printAttributes() {
        // this -> keyword is trying to understand which object i am referring to.
        console.log(this.color);
        console.log(this.speed);
        console.log(this.tyres);
    }
}


var mySantro = new Car('red', 100, 5);
mySantro.printAttributes();