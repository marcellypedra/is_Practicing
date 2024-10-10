//Euler Problem
//Find the sum of all the multiples of 3 or 5 below 1000.

//Crete a function to find the sum of all the multiples of a or 
//(a, b, n) are function parameters

//Allow the user to enter the parameters via text box(es) and alert them to the output

//Demostrate some DOM manipulation in the exercise. 
//For example changing the value of a result div , hiding inputs once the button is clicked..let sumnumbers = 0;

//let multiplessum = () => {

    //sumnumbers = 0;

    //let Numbera = Number(document.getElementById("Numbera").value);
    //let Numberb = Number(document.getElementById("Numberb").value);
    //let Numbern = Number(document.getElementById("nlista").value);
    //for (i = 0; i < Numbern; i++) {
        //if ((i % Numbera == 0) || (i % Numberb == 0)) {
        //sumnumbers += i; 
        }
    
    } 
     //alert("The sum of all multiples is: " + sumnumbers);

    
     //document.getElementById("resultbox").value = sumnumbers;
}

//Arrays:
//a.
//Create a function which takes parameters a,b,l
//l is a list of integers
//find the sum of all the multiples of a or b in l

//b.
//Create a function which takes parameters a,l
//a is a list of two integers
//l is a list of integers
//find the sum of all the multiples of elements of a in l

//c.
//Create a function which takes parameters a,l
//a is a list of integers
//l is a list of integers
//find the sum of all the multiples of elements of a in l


let multiplessum = () => {

    sumnumbers = 0;

    let Numbera = Number(document.getElementById("Numbera").value);
    let Numberb = Number(document.getElementById("Numberb").value);
    let Numberl = () => {
        let l = document.getElementsByName("nlist");
        let inputArray = [];
        for (i = 0; i < l.length; i++) {
            let value = l[i].value.trim(); 
                if (value) { 
                    inputArray.push(value);
                }
            }
            document.getElementById("result").innerText = "Values: " + inputArray.join(", ");  
            //let value
           // if ((i % Numbera == 0) || (i % Numberb == 0)) {
                sumnumbers += i;
           // }

        }
        //alert("The sum of all multiples is: " + sumnumbers);


        //document.getElementById("resultbox").value = sumnumbers;
    }

