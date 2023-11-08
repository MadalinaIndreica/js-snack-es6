
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 
const footballTeams = [
{
    nome : "milan",
    puntiFatti : 0,
    falliSubiti : 0
},
{
    nome : "inter",
    puntiFatti : 0,
    falliSubiti : 0
},
{
    nome : "juventus",
    puntiFatti : 0,
    falliSubiti : 0
}
]
function getRndNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)+ 1 )+ min ;
  }


 footballTeams.forEach((curTeam) => {
    curTeam.puntiFatti = getRndNumbers(1, 10);
    curTeam.falliSubiti = getRndNumbers(1, 10);
      console.log(curTeam);
});

 const [firstTeam, secondTeam, thirdTeam] = footballTeams;
 console.log(firstTeam.nome, firstTeam.falliSubiti);
 console.log(secondTeam.nome, secondTeam.falliSubiti);
 console.log(thirdTeam.nome, thirdTeam.falliSubiti);




