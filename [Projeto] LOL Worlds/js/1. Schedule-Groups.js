let days = 0;

// Jogos, todos contra todos
function schedule1(){
    console.log('############# Round 1')
    console.log('Group A')
    play(groupA[0], groupA[1], 'group');
    play(groupA[2], groupA[3], 'group');
    console.log('')
    console.log('Group B')
    play(groupB[0], groupB[1], 'group');
    play(groupB[2], groupB[3], 'group');
    console.log('')
    console.log('Group C')
    play(groupC[0], groupC[1], 'group');
    play(groupC[2], groupC[3], 'group');
    console.log('')
    console.log('Group D')
    play(groupD[0], groupD[1], 'group');
    play(groupD[2], groupD[3], 'group');
    console.log('')

    updateDays(1);
    animateButton('#play-1', '#play-2');
        orderTable();
}

function schedule2(){
    console.log('############# Round 2')
    console.log('Group A')
    play(groupA[0], groupA[2], 'group');
    play(groupA[1], groupA[3], 'group');
    console.log('')
    console.log('Group B')
    play(groupB[0], groupB[2], 'group');
    play(groupB[1], groupB[3], 'group');
    console.log('')
    console.log('Group C')
    play(groupC[0], groupC[2], 'group');
    play(groupC[1], groupC[3], 'group');
    console.log('')
    console.log('Group D')
    play(groupD[0], groupD[2], 'group');
    play(groupD[1], groupD[3], 'group');
    console.log('')

    updateDays(1);
    animateButton('#play-2', '#play-3');
        orderTable();
}

function schedule3(){
    console.log('############# Round 3')
    console.log('Group A')
    play(groupA[0], groupA[3], 'group');
    play(groupA[1], groupA[2], 'group');
    console.log('')
    console.log('Group B')
    play(groupB[0], groupB[3], 'group');
    play(groupB[1], groupB[2], 'group');
    console.log('')
    console.log('Group C')
    play(groupC[0], groupC[3], 'group');
    play(groupC[1], groupC[2], 'group');
    console.log('')
    console.log('Group D')
    play(groupD[0], groupD[3], 'group');
    play(groupD[1], groupD[2], 'group');
    console.log('')

    
    animateButton('#play-3', '#play-1');
    updateDays(1);
        orderTable();
}


// Checar fim da fase de grupos
function updateDays(day){
    if(days > 4){
        document.querySelector('.play-buttons-container').style.display = 'none'

        animateButton('.play-buttons-container', '.quarter')
        
    }
    else{
        days += day
        document.querySelector('.play-buttons-container h4').innerText = days
    }
   

}