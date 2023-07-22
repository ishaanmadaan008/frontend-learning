const defaultOperator = ['red', 'green']

const useFavouriteColors = ['orane','yellow']

var color_pallete = [ 'blue',...defaultOperator, ...useFavouriteColors]

function validateShoppingList(...items)
{
    if(items.indexOf('Milk')<0)
    {
        return ['Milk',...items]
    }
    return items;
}


validateShoppingList('oranges', 'bread', 'eggs', 'cerials')


const MathLibrary = {

    calculateProduct(...rest)
       { 
        console.log("Please use  the multiply method instead")
        this.multiply(...rest)
    },
    multiply(a,b)
    {
        return a*b
    }
}



MathLibrary.calculateProduct()

function join(...arr) {
    return arr;
  }

 console.log(join([1,2,3],[4,5,6]))