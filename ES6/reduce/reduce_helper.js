var numbers = [1,2,3,4,5]


var sum =numbers.reduce(function(sum, number){
   return  sum + number
},0)


console.log(sum)