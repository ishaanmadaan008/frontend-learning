function reject(array, iteratorFunction) {

    return array.filter(function(element)
    {
        return !iteratorFunction(element)
    })

}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
lessThanFifteen // [ 10 ];
console.log(lessThanFifteen)