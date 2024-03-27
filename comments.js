let prekes = [];

let pav = "Duona";
let kiek = "2 vnt."

prekes.push({
    pavadinimas: pav,
    kiekis: kiek
});

pav = "Cukrus";
kiek = "1 pakelis";

prekes.push({
    pavadinimas: pav,
    kiekis: kiek
});
console.log(prekes);

// Norint atvaizduoti įrašą
/*
tasks.forEach((t)=>{
        ...
        newTask.textContent=`${t.pavadinimas} ${t.kiekis}`;
        ...
    });
*/

// jei tr