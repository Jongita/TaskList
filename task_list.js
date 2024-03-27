// 1. Pasiimame HTML elementus iš DOM pagal ID
//pridejimo mygtukas
const addBtn = document.getElementById("add_task");  // button elementas
// dar reikia saraso kur idesim tas prekes 
const list = document.getElementById("tasks_list") // ul elementas
// pasiimame input
const taskName = document.getElementById("task_name"); // input elementas
const taskNum = document.getElementById("task_num"); // input elementas

// 17. isvalyti sarasa
const clearPrekes = document.getElementById("clear_prekes"); // button elementas


// 8. Kinamasis kuriame saugomos uzduotys. t.y. i 'prekes' prideti nauja preke
let prekes = [];


// 12. atvaizduoja masyva kaip sarasa
const showPrekes = () => {
    //16. Isvalyti buvusi sarasa
    list.innerHTML = "";
    // su kiekviena preke atliksime veiksma
    // kintamasis p - masyvo elementas - preke
    prekes.forEach((p) => {
        // susikurti DOM elementa(nauja objekta HTML element)
        const newTask = document.createElement("li");
        newTask.className = "list-group-item";
        newTask.textContent = `${p.pavadinimas} ${p.kiekis}`;
        list.appendChild(newTask);
    })
}


// 2. kai paspausim mygtuka mes norim kad butu pridedama nauja preke, tekstas/kiekis is input
// valueAsNumber - konvertuoja i skaiciu
// value - tekstas
const addTask = () => {
    const text = taskName.value;
    const quantity = taskNum.value;

    // 7. isvalome buvusia forma
    taskName.value = "";
    taskNum.value = "";

    // 8. issaugome prekes objekte:
    prekes.push({
        pavadinimas: text,
        kiekis: quantity
    });

    // 14. Kadangi visa sia dali jau ikeleme i showPrekes, jos nebereikia

    // // 3. reikia susikurti DOM elementa(nauja objekta HTML element)
    // const newTask = document.createElement("li");
    // // 5. Objekto atributams priskiriame reiksmes, vienas is ju klases pavadinimas
    // newTask.className = "list-group-item";
    // // 6. priskirsim teksta
    // newTask.textContent = `${text} ${quantity}`;
    // // 3. priskiriame objekta list'ui, patalpiname i DOM(saraso apacia)
    // list.appendChild(newTask);

    // 15. atvaizduojami irasai, bet atvaizduoja visas uzduotis kurios ir buvo vel is naujo (kartoja sarasa)
    showPrekes();

    // 16. pries sudedant visus irasus i lista, turetumeme ta lista isvalyti



    // 9. issaugoti i local storage
    localStorage.setItem("prekes", JSON.stringify(prekes));

}

// 17. 
const clearList = () => {
    // isvalome masyva
    prekes = [];
    // turime isvalyti localstorage. Remove item istrins viena eilute, kuria nurodysim, clear - istrins visa
    localStorage.removeItem("prekes");

    // atvaizduoti is naujo
    showPrekes();
}

// 3. paimti kaip sarasa, jam sukurti child elementa po apacia ir prideti ji ir ji sukurti kaip objekta, nurodant kokio tipo elementas bus (HTML element), prideti jam atributus ir prikabinti ji kaip elementa prie saraso.
//createElement grazins Html elementa ir ka noresim ta galesim priskirti. paduoti reikia, kokio tipo tago mums reiketu
// dokument sukurs objekta ir funkcija grazins ji mums, o ta objekta turim prisikirti kokiam nors kintamajam (new task). Bet jis dar nepriskirtas niekur DOMe. mes galim bet kuriam elementui priskirti kaip child elementa.

// 4. Mygtuko paspaudimu prideda li objekta
addBtn.onclick = addTask;

// 18. Mygtukui priskirti isvalyti funkcija
clearPrekes.onclick = clearList;

// 5. Objektui priskirti atributus, vienas is ju klases pavadinimas

// 8. atsidarius nauja langa sarasas dingsta, todel norime ji issisaugoti, t.y i local storage. Kadangi visos prekes dabar yra atskirai, turetume jas pasitalpinti i viena objekta, kad su JSON stingify galetumem visa ta objekta konvertuoti atitinkamai i JSOn koda. Tai gali buti masyvas, objektas ir pan.
// Susikurkime kintamaji kur talpinsime tas visas prekes/taskus.

// 9. Kai jau turime objekte, noretume juos issaugoti. Set item nustatys nauja reiksme, kuri bus issaugota i local storage. Set item priima du kintamuosius. 1 - pavadinimas, i koki mes irasome localstorige, 2 - nurodyti kokia reiksme paduosim. localStorage.setItem("prekes", "labas pasauli"); Key-prekes, Value: Labas pasauli. Key gali buti iki 256 simboliu, o value - labai didelis tekstas. Norint pvz, visa masyva [duona, cukrus, tt] issaugoti, reikia ji paversti i teksta. Galime paduoti tik tekstus!!!! Todel 'prekes' reikia paversti i teksta ir tada ta teksta issaugoti. ir paversti teksta atliekas funkcija stringyfy.
// JSON.stringify([s, b]), formatuos i teksta, kuris bus jsono formatu parasytas tekstas. Uzdarius dokumenta, jau lieka vietineje saugykloje irasai.

// 10. kai uzsikrauna musu failas galime is local storage ir nurodyti koki item norim, pvz console.log(localStorage.getItem('prekes'));

// 11. gauta teksta is local storage mums reikia atsiversti atgal i masyva, tada tuscia masyva prekes = [], sukeisime su masyvu kuri gausime is local storage ir ta masyva atvaizduoti i puslapi.
// JSON.parse paverstu is teksto atgal i objekta(masyva). Kadangi local storage pirma karta neturesim jokiu kintamuju ir gausim atsakyma Null

// 12. Toliau reikia atvaizduoti visas prekes sarase. Sukurti funkcija, kuri atvaizduoja visas prekes


// 10.
console.log(localStorage.getItem('prekes'));

// 11. paimam prekes is local storage
const lsPrekes = localStorage.getItem('prekes');
// patikrinam ar yra kintamasis localstorage, jei nebuvo liks tuscias masyvas, jei yra keisim i:
if (lsPrekes != null) {
    prekes = JSON.parse(lsPrekes);
    // 13. jei kintamasis egzistavo atvaizduojam uzduotis (iskvieciam funkcija 12)
    showPrekes();
}

// 13. kai uzsikrauna puslapis noretume jas atvaizduoti

// 17. Sukuriame mygtuka isvalyti sarasa.

