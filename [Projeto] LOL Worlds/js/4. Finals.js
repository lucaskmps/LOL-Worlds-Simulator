let finalTeams = [];
let thirdTeams = [];

// Pega os vencedores das semis
function compareToFinals(team1, team2){
    if (team1.wins > team2.wins) {
        finalTeams.push(team1)
        thirdTeams.push(team2)
    }
    else{
        finalTeams.push(team2)
        thirdTeams.push(team1)
    }
}




function setFinals (){
    
    animateButton('.semi-container', '.finals-container');

     // Pega os vencedores das semis
    compareToFinals(semiFinalTeams[0], semiFinalTeams[1])
    compareToFinals(semiFinalTeams[2], semiFinalTeams[3])
    console.log('Primeiro Lugar:', finalTeams)
    console.log('Terceiro Lugar:', thirdTeams)

       // Inclui as informações dos times nas divs
       // Final
       for(i=0; i < 2; i++){
        let nome = '#final-name-' + i
        let logo = '#final-logo-' + i
        let flag = '#final-flag-' + i
        let nome2 = '#third-name-' + i
        let logo2 = '#third-logo-' + i
        let flag2 = '#third-flag-' + i
        // nome
        document.querySelector(nome).innerText = finalTeams[i].name
        document.querySelector(nome2).innerText = thirdTeams[i].name
        // logo
        document.querySelector(logo).src = "./images/teams/" + finalTeams[i].img
        document.querySelector(logo2).src = "./images/teams/" + thirdTeams[i].img
        // flag
        document.querySelector(flag).src = "./images/flags/" + finalTeams[i].country + '.jpg'
        document.querySelector(flag2).src = "./images/flags/" + thirdTeams[i].country + '.jpg'
        // Zera as Wins!
        finalTeams[i].wins = 0
        thirdTeams[i].wins = 0
    }
    updateGamesFinals();
}




// Update na Tabela
function updateGamesFinals(){
    for(i=0; i < 2; i++){
        let games = '#final-games-' + i
        let games2 = '#third-games-' + i
        document.querySelector(games).innerText = finalTeams[i].wins
        document.querySelector(games2).innerText = thirdTeams[i].wins
    }
}




// Schedule Third
let thirdGames = 0;

function scheduleThird(){
    play(thirdTeams[0], thirdTeams[1], 'finals');

    checkMD5(thirdTeams[0], thirdTeams[1], 0, 1, 'third');

    thirdGames += 1
    if (thirdGames == 5) {
        //Fix that
        let third = document.querySelector('#play-third')
        let final = document.querySelector('#play-final')

        setTimeout(() => {
            third.style.opacity = '0'
            final.style.display = 'block'
                setTimeout(() => {
                    final.style.opacity = '1'
                    third.style.pointerEvents = 'none'             
                }, 50);
        }, 100);
    }
}

// Schedule Third
let finalGames = 0;

function scheduleFinal(){
    play(finalTeams[0], finalTeams[1], 'finals');

    checkMD5(finalTeams[0], finalTeams[1], 0, 1, 'final');

    finalGames += 1
    if (finalGames == 5) {
        let final = document.querySelector('#play-final')

        setTimeout(() => {
            final.style.opacity = '0'
                setTimeout(() => {                 
                    final.style.pointerEvents = 'none'             
                }, 50);
        }, 100);
    }
    }
