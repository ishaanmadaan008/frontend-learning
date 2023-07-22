function createBookShop(inventory)
{
   return{ 
    inventory,
    inventoryTotalValue: ()=> (inventory.reduce((total, book)=> total+book.price,0)),
    pricePerTile(title) 
    {
        return inventory.find((book)=> book.title=== title).price
    }
   }

}

var inventory =[
    {title:"Harry potter", price : 300},
    {title:"The kite Runner", price : 100},
    {title:"Rich Dad poor Dad", price : 1000},


]

var bookShop = createBookShop(inventory)

console.log(bookShop.inventoryTotalValue())


console.log(bookShop.pricePerTile("Harry potter"))
