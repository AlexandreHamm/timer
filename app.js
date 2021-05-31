const text = document.querySelector('h2');
// console.log(now, countdownDate);


function getChrono(){ // important de créer une fonction pour pouvoir la rappeler dans un intervalle pour refresh le chrono
    const now = new Date().getTime(); // date actuelle
    const countdownDate = new Date('December 24, 2021').getTime();
    
    const distanceBase = countdownDate - now; // on veut savoir le temps qu'il reste donc : date cible - date actuelle = temps restant

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // modulo = % = reste d'une division
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60)) / (1000));
    // console.log(days, hours, minutes, seconds);

    text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;

}
getChrono();

const countdownInterval = setInterval(() => { //setInterval permet de créer un interval à l'aide d'une valeur en ms (1000 = 1s)

    getChrono()

}, 1000);