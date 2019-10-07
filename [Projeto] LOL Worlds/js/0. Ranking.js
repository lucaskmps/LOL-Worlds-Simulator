let rankingTeams =
[
    {
        name: 'Top Esports',                  // CHINA 
        points: 70,
        img: 'top.png',
        country: 'ch.jpg',
    },
    {
        name: 'Royal Never Give Up',
        points: 135,
        img: 'rng.png',
        country: 'ch.jpg',
    },
    {
        name: 'Invictus Gaming',
        points: 150,
        img: 'ig.png',
        country: 'ch.jpg',
    },
    {
        name: 'FunPlus Phoenix',
        points: 360,
        img: 'fpx.png',
        country: 'ch.jpg',
    },
    {
        name: 'Fnatic',               // Europe
        points: 330,
        img: 'fnc.png',
        country: 'eu.jpg',
    },
    {
        name: 'Splyce',
        points: 50,
        img: 'splyce.png',
        country: 'eu.jpg',
    },
    {
        name: 'Schalke 04',
        points: 125,
        img: 'schalke.png',
        country: 'eu.jpg',
    },   
    {
        name: 'G2 Esports',
        points: 195,
        img: 'g2.png',
        country: 'eu.jpg',
    },
    {
        name: 'Damwon Gaming',      // Korea
        points: 175,
        img: 'damwon.png',
        country: 'kr.jpg',
    },
    {
        name: 'SKTelecom T1',
        points: 80,
        img: 'skt.png',
        country: 'kr.jpg',
    },
    {
        name: 'Griffin',
        points: 145,
        img: 'griffin.png',
        country: 'kr.jpg',
    },
    {
        name: 'Kingzone DragonX',
        points: 110,
        img: 'kz.png',
        country: 'kr.jpg',
    },
    {
        name: 'Team Liquid',              // USA
        points: 110,
        img: 'tl.png',
        country: 'us.jpg',
    },
    {
        name: 'Cloud 9',
        points: 160,
        img: 'c9.png',
        country: 'us.jpg',
    },
    {
        name: 'Clutch Gaming',
        points: 145,
        img: 'cg.png',
        country: 'us.jpg',
    },
    {
        name: 'ahq E-sports',       // Taiwan
        points: 95,
        img: 'ahq.png',
        country: 'tw.jpg',
    },
    {
        name: 'J Team',
        points: 85,
        img: 'jt.png',
        country: 'tw.jpg',
    },
    {
        name: 'Hong-Kong Attitude',
        points: 95,
        img: 'hka.png',
        country: 'tw.jpg',
    },
    {
        name: 'Gigabyte Marines',          // Others
        points: 80,
        img: 'marines.png',
        country: 'vt.jpg',
    }
];



/*  Toggle Sidebar & Organize Ranking */
function toggleRanking(){
    document.querySelector('.ranking').classList.toggle('active')
    organizeRanking();
}





/* Organize Ranking Function */
function organizeRanking(){
    rankingTeams.sort(function(a,b){
        return b.points - a.points
    });

    for(i=0; i < 10; i++){
        let position = '#position-' + i
        let logo = '#ranking-logo-' + i + ' img'
        let name = '#ranking-name-' + i
        let points = '#ranking-points-' + i
        // Posição
        document.querySelector(position).innerText = i + 1
        // Logo
        document.querySelector(logo).src = './images/teams/' + rankingTeams[i].img
        // Nome
        document.querySelector(name).innerHTML = rankingTeams[i].name
        // Points
        document.querySelector(points).innerHTML = rankingTeams[i].points
    }

    for(i=0; i < 3; i++){
        let flag = '#rank-flag-' + i + ' img'
        // flag
        document.querySelector(flag).src = './images/flags/' + rankingTeams[i].country
    }
}





