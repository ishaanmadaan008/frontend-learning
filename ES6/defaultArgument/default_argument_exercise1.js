function User(id)
{
    this.id =id
}

function generateId()
{
 return Math.random(10)*9999
}

function createAdminUser(user = new User(generateId))
{
    this.admin = true
    return user
}