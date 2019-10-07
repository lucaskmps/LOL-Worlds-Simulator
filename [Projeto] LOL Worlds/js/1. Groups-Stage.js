function startWorlds(){
    document.querySelector('#sort-container').style.opacity = '0'
    document.querySelector('body').classList.add('wallpaper')
    
        setTimeout(() => {
            document.querySelector('#sort-container').style.display = 'none'
            document.querySelector('.table-container').style.display = 'flex'
            document.querySelector('#play-1').style.display = 'block'
                setTimeout(() => {
                    document.querySelector('.table-container').style.transform = 'translateY(0)'
                    document.querySelector('#play-1').style.opacity = '1'
                }, 50);
        }, 250);

    orderTable();
}



// Arrumar Tabela dos Grupos
function orderTable(){
    pointsA.sort(function(a,b){
        return b.points - a.points     // organiza por ordem de pontos
    })
    pointsB.sort(function(a,b){
        return b.points - a.points     // organiza por ordem de pontos
    })
    pointsC.sort(function(a,b){
        return b.points - a.points     // organiza por ordem de pontos
    })
    pointsD.sort(function(a,b){
        return b.points - a.points     // organiza por ordem de pontos
    })

    
    for(i=0; i<4; i++){
        let teamLogo = '#a-logo-' + i
        let teamName = '#a-team-name-' + i
        let teamPoints = '#a-points-team-' + i
        let teamwins = '#a-wins-team-' + i
        let teamGames = '#a-games-team-' + i
        document.querySelector(teamLogo).src = './images/teams/' + pointsA[i].img
        document.querySelector(teamName).innerText = pointsA[i].name
        document.querySelector(teamPoints).innerText = pointsA[i].points
        document.querySelector(teamwins).innerText = pointsA[i].wins
        document.querySelector(teamGames).innerText = pointsA[i].games
    }

    for(i=0; i<4; i++){
        let teamLogo = '#b-logo-' + i
        let teamName = '#b-team-name-' + i
        let teamPoints = '#b-points-team-' + i
        let teamwins = '#b-wins-team-' + i
        let teamGames = '#b-games-team-' + i
        document.querySelector(teamLogo).src = './images/teams/' + pointsB[i].img
        document.querySelector(teamName).innerText = pointsB[i].name
        document.querySelector(teamPoints).innerText = pointsB[i].points
        document.querySelector(teamwins).innerText = pointsB[i].wins
        document.querySelector(teamGames).innerText = pointsB[i].games
    }

    for(i=0; i<4; i++){
        let teamLogo = '#c-logo-' + i
        let teamName = '#c-team-name-' + i
        let teamPoints = '#c-points-team-' + i
        let teamwins = '#c-wins-team-' + i
        let teamGames = '#c-games-team-' + i
        document.querySelector(teamLogo).src = './images/teams/' + pointsC[i].img
        document.querySelector(teamName).innerText = pointsC[i].name
        document.querySelector(teamPoints).innerText = pointsC[i].points
        document.querySelector(teamwins).innerText = pointsC[i].wins
        document.querySelector(teamGames).innerText = pointsC[i].games
    }

    for(i=0; i<4; i++){
        let teamLogo = '#d-logo-' + i
        let teamName = '#d-team-name-' + i
        let teamPoints = '#d-points-team-' + i
        let teamwins = '#d-wins-team-' + i
        let teamGames = '#d-games-team-' + i
        document.querySelector(teamLogo).src = './images/teams/' + pointsD[i].img
        document.querySelector(teamName).innerText = pointsD[i].name
        document.querySelector(teamPoints).innerText = pointsD[i].points
        document.querySelector(teamwins).innerText = pointsD[i].wins
        document.querySelector(teamGames).innerText = pointsD[i].games
    }
}






