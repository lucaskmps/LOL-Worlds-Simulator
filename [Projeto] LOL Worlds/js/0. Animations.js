// Função para animação de entrada e saida de coisas.
// Nos parâmetros insira: '#div-que-vai-sair', '#div-que-vai-entrar'
function animateButton(currentButton, newButton){
    let buttonA = document.querySelector(currentButton) 
    let buttonB = document.querySelector(newButton)

    buttonA.style.opacity = 0
        setTimeout(() => {
            buttonA.style.display = 'none'
            buttonB.style.display = 'flex'
                setTimeout(() => {
                    buttonB.style.opacity = '1'
                }, 50);
        }, 100);
}