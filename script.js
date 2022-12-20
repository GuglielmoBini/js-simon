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
