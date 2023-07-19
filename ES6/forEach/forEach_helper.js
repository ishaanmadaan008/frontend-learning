var colors = ['red', 'blue' , 'green']

for(var i=0; i< colors.length; i++)
{
  console.log(colors[i])
}


colors.forEach(function(color){
console.log(color)
})


// create an array of numbers
var numbers = [1, 2 ,3,4 ,5]
// create a variable sum to hold the sum
var sum =0

// Loop through the numbers , incrementing the sum variable

numbers.forEach(function(number)
                {
  sum+= number;
})
               
// print the sum variable

console.log(sum)


               