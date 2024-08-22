
function getCheese() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const cheese = "🍰"
            resolve(cheese);
        }, 2000)
    })
}
function makeDough(cheese) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dough = cheese + "💚";
            resolve(dough);
        }, 2000)
    })
}
function makePizza(dough) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000)
    })
}


async function orderPizza(){
    try{
        const cheese  = await getCheese();
        console.log("here is cheese", cheese);
        const dough = await makeDough(cheese);
        console.log("here is the dough", dough);
        const pizza = await makePizza(dough);
        console.log("here is the pizza", pizza);
        console.log("Hava a nice day sir/madam.");
    }catch(err){
        console,log("Error occured",err)
    }
    console.log("Process ended")
} 


orderPizza();


// getCheese().then((cheese)=>{
//     console.log("here is cheese", cheese);
//     return makeDough(cheese)
// })
// .then((dough)=>{
//     console.log("here is the dough", dough);
//     return makePizza(dough);
// }).then((pizza)=>{
    // console.log("here is the pizza", pizza);
// }).catch((data)=>{
//     console.log("Error occured",data)
// }).finally(()=>{
//     console.log(" Process ended ")
// })

