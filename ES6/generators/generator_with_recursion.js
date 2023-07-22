class comment
{
    constructor(content , children)
    {
        this.content = content;
        this.children = children;

    }

*[Symbol.iterator]()
{
    yield this.content;
    for (let child of this.children)
    {
    yield* child;
    }

}
}

const children = [
    new comment('good comment',[]),
    new comment('Bad comment',[]),
    new comment('meh',[]),
    
]

const tree = new comment("My opinion on climate change", children)


values =[]

for (let content of tree)
{
    values.push(content)

}
console.log(values)

