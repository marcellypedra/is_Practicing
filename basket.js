alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

let basketCost=()=>{
    sumnumbers = 0;

    const products = [
        Text(document.getElementsById("product1").value),
        Text(document.getElementsById("product2").value),
        Text(document.getElementById("product3").value)
    ];
    const quantity = [
        Number(document.getElementById("qty1").value),
        Number(document.getElementById("qty2").value),
        Number(document.getElementById("qty3").value)        
    ];
    const costs = [
        Number(document.getElementByValue("1").value),
        Number(document.getElementByValue("2").value),
        Number(document.getElementByValue("3").value)        
    ];
    
    const basket = products.map(function(value, index) {
        return value + " " + quantity[index];
    });

    const prices = products.map(function(value, index){
        return value +" " + costs[index];
    });

for(i = 0; i < basket[quantity].length; i++) {
    if(basket[quantity] * prices[costs] === 0) {
        sumnumbers += i;
    }
}
document.getElementById("basket").value = ("const basket" + "const prices");   
document.getElementById("totalbox").value = sumnumbers;
}

document.getElementById("clickme").addEventListener('click', basketCost);

