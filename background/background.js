//código que pode ser executado ao instalar, atualizar ou inicializar

//Estado e operações de longo prazo, independente do tempo de vida de qualquer pagina web  ou tab
const NORMAL_SPEED = 2;

//Quando a extensao for instalada executa esse bloco de código
//seta o estado da extensao para ativa e a velocidade para a padrão
onExtensionInstalled(setInitial);

function setInitial(){
    setInitialActive();
    setInitialSpeed();
}

async function setInitialActive(){
    const active = await getActive()
    if(active == null) await setActive(true)
}

async function setInitialSpeed(){
    const speed = await getSpeed()
    if(speed == null) await setSpeed(NORMAL_SPEED);
}