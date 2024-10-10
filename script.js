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

let sumnumbers = 0

let multiplessum = () => {

    sumnumbers = 0;

    let Numbera = Number(document.getElementById("Numbera").value);
    let Numberb = Number(document.getElementById("Numberb").value);
    const l = [
        Number(document.getElementById("nlista").value), 
        Number(document.getElementById("nlistb").value), 
        Number(document.getElementById("nlistc").value)
    ]; 
        
    for (let i = 0; i < l.length; i++) {
       
       if ((l[i] % Numbera == 0) || (l[i] % Numberb == 0)) {
        sumnumbers += l[i];              
    }
     
     }
        alert("The sum of all multiples is: " + sumnumbers);

        document.getElementById("resultbox").value = sumnumbers;
};

document.getElementById("clickme").onclick = multiplessum;
      

