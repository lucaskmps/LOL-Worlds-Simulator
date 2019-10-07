let semiFinalTeams = [];

// Pega os vencedores das quartas
function compare(team1, team2){
    if (team1.wins > team2.wins) {
        semiFinalTeams.push(team1)
    }
    else{
        semiFinalTeams.push(team2)
    }
}





// Seta a Semi-final
function setSemiFinal(){

    animateButton('.quarter-container', '.semi-container');

    // Pega os vencedores das quartas
    compare(quarterTeams[0], quarterTeams[1])
    compare(quarterTeams[2], quarterTeams[3])
    compare(quarterTeams[4], quarterTeams[5])
    compare(quarterTeams[6], quarterTeams[7])

    // Inclui as informações dos times nas divs
    for(i=0; i < 4; i++){
        let nome = '#semi-name-' + i
        let logo = '#semi-logo-' + i
        // nome
        document.querySelector(nome).innerText = semiFinalTeams[i].name
        // logo
        document.querySelector(logo).src = "./images/teams/" + semiFinalTeams[i].img
        // Zera as Wins!
        semiFinalTeams[i].wins = 0
    }

    updateGamesSemi();
}




function updateGamesSemi(){
    for(i=0; i < 4; i++){
        let games = '#semi-games-' + i
        document.querySelector(games).innerText = semiFinalTeams[i].wins
    }
}




// Schedule Quarters
let semiGames = 0;

function scheduleSemi(){
    play(semiFinalTeams[0], semiFinalTeams[1], 'semi');
    checkMD5(semiFinalTeams[0], semiFinalTeams[1], 0, 1, 'semi');

    play(semiFinalTeams[2], semiFinalTeams[3], 'semi');
    checkMD5(semiFinalTeams[2], semiFinalTeams[3], 2, 3, 'semi');

    semiGames += 1
    if (semiGames == 5) {
        animateButton('#play-semi','#go-to-finals')
    }
}

