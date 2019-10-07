// Play Function
function play(team1, team2, stage){

    // Skill menor para ser usada na fórmula
    let team1MinSkill = Math.floor(team1.power - (team1.power / 2))
    let team2MinSkill = Math.floor(team2.power - (team2.power / 2))

    // Total performance
    let team1Total = 0;
    let team2Total = 0;

    // Adiciona 3 fases de pontos, early, mid e late game pro team1Total
    for(i = 1; i < 4; i++){      
        team1Total += Math.floor(Math.random () * team1MinSkill) + team1MinSkill
        team2Total += Math.floor(Math.random () * team2MinSkill) + team2MinSkill
    }

    // Média da Performance
    let performanceTeam1 = Math.floor(team1Total / 3)
    let performanceTeam2 = Math.floor(team2Total / 3)

    // Funcionalidade: Caso fase de grupos, quartas, semis
        switch (stage) {
            case 'group':
                if (performanceTeam1 > performanceTeam2) {
                    team1.points += 3
                    team1.wins += 1
                    console.log(`${team1.name}  [ Win ] x [ Loss ]  ${team2.name}`)
                }
                else if (performanceTeam1 < performanceTeam2){
                    team2.points += 3
                    team2.wins += 1
                    console.log(`${team2.name}  [ Win ] x [ Loss ]  ${team1.name}`)
                }
                else{
                    team1.points += 1
                    team2.points += 1
                    console.log(`${team1.name}  [ Draw ] x [ Draw ]  ${team2.name}`)
                }
                break;
        
            case 'quarter':
                    if (performanceTeam1 > performanceTeam2) {
                        team1.wins += 1
                    }
                    else if (performanceTeam1 < performanceTeam2){
                        team2.wins += 1
                    }
                    else{
                        play(team1, team2, 'quarter')
                    }
                    updateGamesQuarters();
                break;

            case 'semi':
                if (performanceTeam1 > performanceTeam2) {
                    team1.wins += 1
                }
                else if (performanceTeam1 < performanceTeam2){
                    team2.wins += 1
                }
                else{
                    play(team1, team2, 'semi')
                }
                updateGamesSemi();
            break;
            case 'finals':
                if (performanceTeam1 > performanceTeam2) {
                    team1.wins += 1
                }
                else if (performanceTeam1 < performanceTeam2){
                    team2.wins += 1
                }
                else{
                    play(team1, team2, 'semi')
                }
                updateGamesFinals();
            break;
        }


    // Add +1 game to the team
    team1.games += 1
    team2.games += 1

}