const tlacitka = document.querySelectorAll('.tlacitko-pozdravu');

tlacitka.forEach((tlacitko) => {
    tlacitko.addEventListener('click', (udalost)=> {
        console.log('Ahoj '+ udalost.target.innerHTML);
    });
});

let petr = document.querySelector('#petr');
petr.addEventListener('click', (e)=> {
    console.log(e.target.innerHTML+", jsi lůzr");
    petr.removeEventListener('click', (e)); //removeListener nebude fungovat, protože forEach ti to vždycky znova vytvoří při kliknutí

})