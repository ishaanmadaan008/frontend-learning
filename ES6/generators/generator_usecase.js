engineeringteam = {
    size : 3,
    prfofile : "security",
    Manager : "Jill",
    Lead : "Adam",
    engineer: "Chris"

}


function* Teamiterator(team){
    yield team.Manager,
    yield team.Lead,
    yield team.engineer
}

employeenames = []


for (let name of Teamiterator(engineeringteam))
{

    employeenames.push(name)
}

console.log(employeenames)