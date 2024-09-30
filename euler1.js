
//Find the sum of all the multiples of 3 or 5 below 1000.

//Crete a function to find the sum of all the multiples of a or 
//(a, b, n) are function parameters

//Allow the user to enter the parameters via text box(es) and alert them to the output

function findamultiples(integer, limit) {
    let cnt=1
    multi=integer
    let result = []

    while (multi < 1000) {
        result.push(multi)
        cnt++
        multi = cnt*integer

    alert(Number(result))
    }
    console.log(result)
    return result
        
    }
    












