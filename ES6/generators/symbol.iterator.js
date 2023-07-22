testTeam ={
    Lead: "manoj",
    Tester: "sai",
    [Symbol.iterator]: function*()
    {
        yield this.Lead
        yield this.Tester
    }

}

engineeringteam = {
    testTeam,
    size : 3,
    prfofile : "security",
    Manager : "Jill",
    Lead : "Adam",
    engineer: "Chris",
    [Symbol.iterator]: function*()
    {
        yield this.Lead;
        yield this.Manager
        yield this.engineer
        yield* this.testTeam
    }

}



employeenames = []


for (let name of engineeringteam)
{

    employeenames.push(name)
}

console.log(employeenames)