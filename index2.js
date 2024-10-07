const a = [Number(document.getElementById("numbera").value)]; 
const b = [Number(document.getElementById("numberb").value)];
const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const summulti = l.reduce ((p, c) => {
    const multi = l.filter ((c % a === 0) || (c % b === 0));

     return p + c

    }, 0)

    