let promise = new Promise((resolve,reject)=> {

    var request = new XMLHttpRequest()

    request.onload = ()=>{
        resolve();
    }
    setTimeout(()=> 
    reject(), 3000)

});

promise.then( () =>{
    console.log("finally finished")
}).then(() =>{
console.log("I can also ran")
}).catch(() => {
console.log("rejected state")
})

url = "https://jsonplaceholde111.typicode.com/posts/"
fetch(url).then(response => response.json()).then(data => console.log(data))
.catch(error=> console.log('Bad',error))






