// Q1. In the following shopping cart  add , remove and edit items
// const shoppingCart = ["Milk","Coffee","Tea","Honey"]

// 1. add "Meat in the beggining of our shoppingcart if it has not been already added"
// 2. add "Sugar" at the end of our shoppingcart if it has not been already added"
// 3. remove honey if you are allergic
// 4. modify Tea to "green tea"


let shoppingCart = ["Milk","Coffee","Tea","Honey"]

// 1. add "Meat in the beggining of our shoppingcart if it has not been already added"
if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat")
}

// 2. add "Sugar" at the end of our shoppingcart if it has not been already added"
if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar")
}


// 3. remove honey if you are allergic
let allergicToHoney = true; 
if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf("Honey");
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
    }
}


// 4. modify Tea to "green tea"
const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = "Green Tea";
}


console.log("Updated Shopping Cart:", shoppingCart);