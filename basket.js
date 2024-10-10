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
       document.getElementById("product1").checked ? "Flour 1Kg" : null,
       document.getElementById("product2").checked ? "Bread 100g" : null,
       document.getElementById("product3").checked ? "Milk 1l" : null
    ];
    const quantity = [
        Number(document.getElementById("qty1").value),
        Number(document.getElementById("qty2").value),
        Number(document.getElementById("qty3").value)        
    ];
    const prices = [
        document.getElementById("product1") = 1,
        document.getElementById("product2") = 2,
        document.getElementById("product3") = 3
    ]
    };
        
    
    let basket = [];
    for (i = 0; i < products.length; i++) {
    if(products[i] !== null && quantity[i] >0) {
        let productCost = quantity[i] * prices [products[i]];
        sumnumbers += productCost;

        basket.push(`${products[i]} x ${quantity[i]} = £${productCost}`);

    }
}
document.getElementById("basket").value = basket.join("\n");

document.getElementById("totalbox").value = `£${sumnumbers}`;

}

document.getElementById("clickme").addEventListener('click', basketCost);

