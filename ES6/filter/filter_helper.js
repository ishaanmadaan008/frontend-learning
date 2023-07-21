var products = [
    {name: 'cucumber', type:'vegetable'},
    {name: 'orange', type:'fruit'},
    {name: 'bottleguard', type:'vegetable'}
];

var filtered_products = products.filter(function(product)
{
    return product.type ==='vegetable'
})

filtered_products
console.log(filtered_products)