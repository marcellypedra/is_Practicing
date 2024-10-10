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
    const l = (document.getElementById("nlista").value, document.getElementById("nlistb").value, document.getElementById("nlistc").value)
        let inputArray = []        
        for (i = 0; i < l.length; i++) {
            let value = l[i].value.trim(); 
                if (value) { 
                    inputArray.push(value);
                }
            }
            let result = inputArray.join(", ");

    for (i = 0; i < result.length; i++) {
       if ((i % Numbera == 0) || (i % Numberb == 0)) {
        sumnumbers += i;              
    }
     
     }
         document.getElementById("clickme").onclick = multiplessum;
         
         alert("The sum of all multiples is: " + sumnumbers);

         document.getElementById("resultbox").value = sumnumbers;
}
      

