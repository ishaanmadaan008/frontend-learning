testTeam ={
    Lead: "manoj",
    Tester: "sai"
}

engineeringteam = {
    testTeam,
    size : 3,
    prfofile : "security",
    Manager : "Jill",
    Lead : "Adam",
    engineer: "Chris"

}


function* Teamiterator(team){
    yield team.Manager
    yield team.Lead
    yield team.engineer
    const testTeamGenerator = TestTeamIterator(team.testTeam)
    yield* testTeamGenerator
}

function* TestTeamIterator(testTeam)
{
    yield testTeam.Lead;
    yield testTeam.Tester;

}

employeenames = []


for (let name of Teamiterator(engineeringteam))
{

    employeenames.push(name)
}

console.log(employeenames)