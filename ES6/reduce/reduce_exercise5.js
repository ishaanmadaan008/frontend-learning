function unique(array) {
   return array.reduce(function(new_array,value)
    {
        if(new_array.find(function(val)
        {
            return val==value
        })==undefined)
        {new_array.push(value)}
        return new_array
        
    },[])

  
}

console.log(unique([1,1,23,4]))