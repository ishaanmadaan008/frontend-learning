class Car {

    constructor({title})
    {
        this.title = title
    }

    drive()
    {
        return "vroom"
    }

}

class Toyota extends Car
{
    constructor({ color , title })
    {
        super(title)
        this.color = color

    }

    honk()
    {
        return "beep"   
    }
}


const toyota = new Toyota({color : "Red", title: "Camry"})

console.log(toyota.honk())
console.log(toyota.drive())



