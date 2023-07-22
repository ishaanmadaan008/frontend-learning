const companies = [
    "Google",
    "Facebook",
    "Uber"
]

const [ name1, name2 , name3 ] = companies 

name1
name2
name3

const firstCompany = companies[0]


const { length } = companies

const [ first_name , ...rest] = companies

first_name


// Destructuring of arrays and objects

const companies_dict =[
    {name : 'Google', location: 'US'},{name : 'Zomato', location: 'india'}

]

const { locations : [ location ] }=  companies_dict

