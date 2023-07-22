function signup(username , passowrd , email , dob , city)
{
    // create a new User

}

function signup({username, password, email , dob , city})
{
    // create a new User

}

// other code
// other code

//other code


signup('myName', 'myPassword', 'example008@gmail.com', '10/04/1992', 'Gurgaon')


signup('myName', 'myPassword','10/04/1992', 'example008@gmail.com', "1000", 'Gurgaon')

signup({username : "myName", password: "myPassword" , email : "email" , dob : "dob", city: "city"})

const  points = [
    [4,5],
    [7,8],
    [9,10]
]

points.map(([ x,y ]) => 
    {        return {x,y}
        })


points.map(([ point]) => ({x:point[0],y:point[1]}))        
