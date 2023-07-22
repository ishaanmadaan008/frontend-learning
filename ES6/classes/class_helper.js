function Car(Options)
{
    this.model = Options.title
}

Car.prototype.drive = function()
{
    return "vroom"
}


var myCar = new Car({title: "hundai"})

console.log(myCar.drive())

function Toyota(Options)
{
    Car.call(this,Options)
    this.color = this.color
}

Toyota.prototype = Object.create(Car.prototype)
Toyota.prototype.constructor = Toyota

Toyota.prototype.honk = function()
{
    return "beep"
}

const toyota = new Toyota({
    color : "Red",
    title : "camry"
})


console.log(toyota.honk())
console.log(toyota.drive())