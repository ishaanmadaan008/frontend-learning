const fibonacci = (n) =>{
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }


console.log(fibonacci(5))


const profile = {
    name: 'Alex',
    getName: function()
    {return this.name}
};

console.log(profile.getName())
