var expense =
{
    type: "Buisness",
    amount: "45 usd"    

}

const {type, amount} = expense


var savedFile = 
{
    type: ".jpg",
    name: "report",
    size: 14040

}


function fileSumary({name , extension , size},{color})
{
 return `This file is ${name}.${extension} have size of ${size} kb and color is ${color}`
}


fileSumary(savedFile,{color : red})