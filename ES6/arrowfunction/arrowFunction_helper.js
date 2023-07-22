const add = (a,b) => a+b ;

const double =  number => 2 * number;


const numbers = [1,2,3,4]

numbers.map(number => number*2)

const team = {
    members : ['Jane', 'Bill'],
    teamName : 'Super Squad',
    teamSummary : function()
    {
        return this.members.map((member) => `${member} is on team ${this.teamName} `
        )
    }
}

console.log(team.teamSummary()) 