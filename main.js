/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/


const obrazky = document.querySelectorAll(".obrazek");
let soucetKalorii = 0;
let seznam = document.getElementById("tretinka");


obrazky.forEach((obrazek) => {
    obrazek.addEventListener("click", vypisKalorie); // forEach připojuje funkci pro každý obrázel v poli "obrazky"
    
});

function vypisKalorie(udalost) { //tohle je ta funkce
    let obrazek = udalost.target; //UDALOST.TARGET !!!
    let kalorie = parseInt(obrazek.dataset.kalorie);
    soucetKalorii = soucetKalorii + kalorie;
    document.querySelector("#vysledek").textContent = kalorie;

    let totalKalorie = document.querySelector("#totalKalorie");
    totalKalorie.textContent = soucetKalorii;

    obrazek.removeEventListener("click", vypisKalorie); // nakonec odebereme funkci EventListeneru
};


