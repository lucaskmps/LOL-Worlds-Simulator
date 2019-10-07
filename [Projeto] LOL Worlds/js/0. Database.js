let database = [
{
    name: 'SKT T1',       // Tier 1 Korea
    power: 0,
    tier: 100,
    points: 0,
    wins: 0,
    games: 0,
    country: 'kr',
    img: 'skt.png',
},
{    
    name: 'Griffin',
    power: 0,
    tier: 95,
    points: 0,
    wins: 0,
    games: 0,
    country: 'kr',
    img: 'griffin.png',
},
{    
    name: 'Damwon Gaming',
    power: 0,
    tier: 90,
    points: 0,
    wins: 0,
    games: 0,
    country: 'kr',
    img: 'damwon.png',
},
{    
    name: 'Kingzone DragonX',
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'kr',
    img: 'kz.png',
},
{ 
    name: 'G2 Esports',       // Tier 1 Europa
    power: 0,
    tier: 100,
    points: 0,
    wins: 0,
    games: 0,
    country: 'eu',
    img: 'g2.png',
},
{    
    name: 'Fnatic',
    power: 0,
    tier: 90,
    points: 0,
    wins: 0,
    games: 0,
    country: 'eu',
    img: 'fnc.png',
},
{    
    name: 'Splyce',
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'eu',
    img: 'splyce.png',
},
{    
    name: 'Schalke 04',
    power: 0,
    tier: 75,
    points: 0,
    wins: 0,
    games: 0,
    country: 'eu',
    img: 'schalke.png',
},
{    
    name: 'FPX',       // Tier 1 China
    power: 0,
    tier: 100,
    points: 0,
    wins: 0,
    games: 0,
    country: 'ch',
    img: 'fpx.png',
},
{
    name: 'RNG',
    power: 0,
    tier: 90,
    points: 0,
    wins: 0,
    games: 0,
    country: 'ch',
    img: 'rng.png',
},
{    
    name: 'Invictus Gaming',
    power: 0,
    tier: 85,
    points: 0,
    wins: 0,
    games: 0,
    country: 'ch',
    img: 'ig.png',
},
{    
    name: 'Top Esports',
    power: 0,
    tier: 85,
    points: 0,
    wins: 0,
    games: 0,
    country: 'ch',
    img: 'top.png',
},
{    
    name: 'Team Liquid', // Tier 1 Usa
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'us',
    img: 'tl.png',
},
{    
    name: 'Cloud 9',
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'us',
    img: 'c9.png',
},
{    
    name: 'Clutch Gaming',
    power: 0,
    tier: 75,
    points: 0,
    wins: 0,
    games: 0,
    country: 'us',
    img: 'cg.png',
},
{    
    name: 'J Team',    // Tier 1 Taiwan/LMS
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'tw',
    img: 'jt.png',
},
{    
    name: 'ahq E-sports',
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'tw',
    img: 'ahq.png',
},
{    
    name: 'Flash Wolves',
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'tw',
    img: 'fw.png',
},
{    
    name: 'Hong-Kong Attitude',
    power: 0,
    tier: 75,
    points: 0,
    wins: 0,
    games: 0,
    country: 'tw',
    img: 'hka.png',
},
{    
    name: 'Gigabyte Marines',      // Others
    power: 0,
    tier: 80,
    points: 0,
    wins: 0,
    games: 0,
    country: 'vt',
    img: 'marines.png',
}
];

// Randomiza O poder das equipes naquela temporada
database.forEach((element) =>
    element.power = Math.floor(Math.random () * element.tier)
)

// Team[0] á Team[7] 
let groupA = [];
let groupB = [];
let groupC = [];
let groupD = [];

let pointsA = [];
let pointsB = [];
let pointsC = [];
let pointsD = [];

let totalTeams = 0;

// Seta cada time na array do seu grupo
function sortTeams(){
    let random = Math.floor(Math.random () * database.length)

    if(groupA.indexOf(database[random]) == -1 && groupB.indexOf(database[random]) == -1 
    && groupC.indexOf(database[random]) == -1 && groupD.indexOf(database[random]) == -1){
        if(groupA.length < 4){
                groupA.push(database[random])
                pointsA.push(database[random])
                includeLogo(database[random].img, groupA.length, 'a')
            }

        else if(groupA.length == 4 && groupB.length < 4){
            groupB.push(database[random])
            pointsB.push(database[random])
            includeLogo(database[random].img, groupB.length, 'b')
        }
        else if(groupB.length == 4 && groupC.length <4){
            groupC.push(database[random])
            pointsC.push(database[random])
            includeLogo(database[random].img, groupC.length, 'c')
        }
        else if(groupC.length == 4 && groupD.length <4){
            groupD.push(database[random])
            pointsD.push(database[random])
            includeLogo(database[random].img, groupD.length, 'd')
        }
}
    else{
        sortTeams();
    }
}

// Inclui os logos dos times na boxes 
function includeLogo(teamLogo, total, group){
    let box = "#" + group + "-team" + total
    document.querySelector(box).src = './images/teams/' + teamLogo

    // Efeitos
        setTimeout(() => {
            document.querySelector(box).style.opacity = '1'
        }, 1);
    totalTeams += 1
        if(totalTeams == 16){
            document.querySelector('#sort-button').style.opacity = '0'
            document.querySelector('#sort-button').style.pointerEvents = 'none'
                setTimeout(() => {
                    document.querySelector('#sort-button').style.display = 'none'

                    document.querySelector('#start-button').style.opacity = "1"
                    document.querySelector('#start-button').style.pointerEvents = "auto"
                }, 200);
        }
}



// Função para testes, apenas clicar no logo do lol no <header>
let europe = [];
 function test(){
   europe = database.filter((element) =>{
        return element.country.includes('eu')
    })

    console.log(europe)
}
