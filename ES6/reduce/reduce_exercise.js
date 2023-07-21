var primary_colors = [
    { color : 'red'},
    { color : 'blue'},
    { color : 'green'}
]

var colors = primary_colors.reduce(function(accumulator,color)
{
    accumulator.push(color.color)
    return accumulator
},[])

console.log(colors)
