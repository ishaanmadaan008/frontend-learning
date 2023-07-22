function* shopping()
{
    // stuff on the side walk

    //walking down the side walk

    // go into the store with the cash

    const stuffFromStore=yield 'cash';

    // walking back home

    return stuffFromStore


}


// stuff in the store
const gen =  shopping()
gen.next() // leaving our house

gen .next('groceries') // leaving the store with groceries.
