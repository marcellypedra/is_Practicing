//Find the sum of all the multiples of 3 or 5 below 1000.

//Crete a function to find the sum of all the multiples of a or 
//(a, b, n) are function parameters

//Allow the user to enter the parameters via text box(es) and alert them to the output

//Demostrate some DOM manipulation in the 

let sumnumbers = 0;

let multiplessum = () => {

    sumnumbers = 0;

    let Numbera = Number(document.getElementById("Numbera").value);
    let Numberb = Number(document.getElementById("Numberb").value);
    let Numbern = Number(document.getElementById("Numbern").value);
    for (i = 0; i < Numbern; i++) {
        if ((i % Numbera == 0) || (i % Numberb == 0)) {
        sumnumbers += i; 
        }
    
    } 
     alert("The sum of all multiples is: " + sumnumbers);

    
     document.getElementById("result").innerHTML = sumnumbers;
    

let findmultipleslist = () => {
    let Numbera = Number(document.getElementById("Numbera").value);
    let Numberb = Number (document.getElementById("Numberb").value);
    const array
}
