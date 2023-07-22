function addNumbers(numbers)
{
    return numbers.reduce((total,number) => total+number, 0)

}

addNumbers([1,2,3,4,5,6])


function addNumbers(...numbers)
{
    return numbers.reduce((total,number) => total+number, 0)

}

addNumbers(1,2,3,4,5)