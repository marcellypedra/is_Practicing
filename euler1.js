
//Find the sum of all the multiples of 3 or 5 below 1000.

//Crete a function to find the sum of all the multiples of a or 
//(a, b, n) are function parameters

//Allow the user to enter the parameters via text box(es) and alert them to the output

let sumnumbers = 0;

let multiplessum = () => {
    let Numbera = document.getElementById("Numbera").value;
    let Numberb = document.getElementById("Numberb").value;
    let Numbern = document.getElementById("Numbern").value;
    for (i = 0; i < Numbern; i++) {
        if ((i % Numbera === 0) || (i % Numberb === 0)) {
        sumnumbers += i; 
alert("The sum of all multiples is: " + sumnumbers); 
        }  
    }     
   return sumnumbers
}



 

    












