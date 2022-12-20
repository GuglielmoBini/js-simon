/*
In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!
Vi sono forniti in allegato HTML e CSS, cercate di analizzarli per capire come intervenire sul countdown.
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano dal Natale?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

//-------------------------------------------------------------------------

// prendo gli elementi dal DOM
const countDays = document.getElementById("days");
const countHours = document.getElementById("hours");
const countMinutes = document.getElementById("minutes");
const countSeconds = document.getElementById("seconds");

// setto la data del countdown
const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

//converto da ms in secondi, minuti, ore e giorni
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

// creo funzione per il countdown (1 sec)

const countDown = setInterval(() => {
  // prendo la data di oggi
  const today = new Date().getTime();
  //   console.log(today);

  // trovo la differenze tra la data di oggi e quella della fine del mio countdown
  const difference = countDownDate - today;

  // calcolo il tempo per giorni, ore, minuti e secondi
  const daysLeft = Math.floor(difference / days);
  //   console.log("giorni:" + " " + daysLeft);
  const hoursLeft = Math.floor((difference % days) / hours);
  //   console.log("ore:" + " " + hoursLeft);
  const minutesLeft = Math.floor((difference % hours) / minutes);
  //   console.log("minuti:" + " " + minutesLeft);
  const secondsLeft = Math.floor((difference % minutes) / seconds);
  //   console.log("secondi:" + " " + secondsLeft);

  // stampo in pagina
  countDays.innerText = daysLeft;
  countHours.innerText = hoursLeft;
  countMinutes.innerText = minutesLeft;
  countSeconds.innerText = secondsLeft;

  // stoppo il countdown

  if (difference < 0) {
    clearInterval(countDown);
  }
}, 1000);
