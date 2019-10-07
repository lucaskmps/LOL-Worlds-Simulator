let quarterTeams = [];


// Seta todos times, animações e funções das quartas de final 
function quarter(){
    // Animation
    document.querySelector('.table-container').style.transition = 'all 500ms linear'
    document.querySelector('.table-container').style.transform = 'translateX(-200%)'
    document.querySelector('.quarter').style.transform = 'translateX(200%)'

    // wallpaper
    document.querySelector('body').classList.remove('wallpaper')
    document.querySelector('body').classList.add('wallpaper2')
    
        setTimeout(() => {
            document.querySelector('.table-container').style.display = 'none'
            document.querySelector('.quarter').style.display = 'none'
            // wallpaper
            document.querySelector('.wallpaper2').style.opacity = '1'

            document.querySelector('.quarter-container').style.display = 'flex'
                setTimeout(() => {
                    document.querySelector('.quarter-container').style.opacity = '1'
                }, 300);
        }, 200);


        // Pega os primeiros colocados, e sorteia as chaves
        quarterTeams.push(
            pointsA[0], pointsA[1],
            pointsB[0], pointsB[1],
            pointsC[0], pointsC[1],
            pointsD[0], pointsD[1] 
            )
            shuffle(quarterTeams);
            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
              }
           
                            // Aplica os times visualmente nas chaves e ZERA as wins
                            for(i=0; i < 8; i++){
                                let nome = '#quarter-name-' + i
                                let logo = '#quarter-logo-' + i
                                // nome
                                document.querySelector(nome).innerText = quarterTeams[i].name
                                // logo
                                document.querySelector(logo).src = "./images/teams/" + quarterTeams[i].img
                                // Zera as Wins!
                                quarterTeams[i].wins = 0
                            }
                                    updateGamesQuarters();
}






function updateGamesQuarters(){
    for(i=0; i < 8; i++){
        let games = '#quarter-games-' + i
        document.querySelector(games).innerText = quarterTeams[i].wins
    }

}


// Fundo Verde caso vença antecipadamente
function checkMD5(team1, team2, number1, number2, stage){
    let box1 = '#' + stage + '-games-' + number1
    let box2 = '#' + stage + '-games-' + number2

        if (team1.wins - team2.wins >= 2 && team1.wins > 2 ) {
            document.querySelector(box1).style.background = 'green'
        }
        else if(team2.wins - team1.wins >= 2 && team2.wins > 2 ){
            document.querySelector(box2).style.background = 'green'
        }
}




// Schedule Quarters
let quarterGames = 0;

function scheduleQuarters(){
    play(quarterTeams[0], quarterTeams[1], 'quarter');
    checkMD5(quarterTeams[0], quarterTeams[1], 0, 1, 'quarter');

    play(quarterTeams[2], quarterTeams[3], 'quarter');
    checkMD5(quarterTeams[2], quarterTeams[3], 2, 3, 'quarter');
    
    play(quarterTeams[4], quarterTeams[5], 'quarter');
    checkMD5(quarterTeams[4], quarterTeams[5], 4, 5, 'quarter');

    play(quarterTeams[6], quarterTeams[7], 'quarter');
    checkMD5(quarterTeams[6], quarterTeams[7], 6, 7, 'quarter');

    quarterGames += 1
    if (quarterGames == 5) {
        animateButton('#play-quarters','#set-semi')
    }
}