// balanced paranthesis 

// "()()()()"
// "((()))"
// "((((("
// ")))))"

function balancedParanthesis(string)
{
    return string.split("").reduce(function(counter , char)
    {
        if(counter<0)
        {
            return counter
        }
        if (char === '(')
        { 
            return ++counter}
        if (char === ')')
        {
            return --counter
        }
        return counter
    },0)
}


console.log(balancedParanthesis("()"))