const activeField = document.getElementById('active')
const speedTxt = document.getElementById('speed')
const speedRange = document.getElementById('speedRange')
const saveButton = document.getElementById('save')

const NORMALIZE_RATE = 10;
let initialState,state = {
    active: null,
    speed:null
};

(async function(){
        state =  await getInitialState();
        initialState = {...state};
        updateActiveField();
        addListenerActiveField();
        updateSpeed();
        addListenerRange();
})()


async function getInitialState(){
    return {
        active:  await getActive(),
        speed: await getSpeed()
    }
}
function updateActiveField(){
    activeField.checked = state.active
}

function addListenerActiveField(){
    activeField.onclick = (event)=>{
        onActiveFieldClicked(event)
    }
}

function onActiveFieldClicked(event){
    state.active = event.target.checked;
    updateActiveField()
}

function updateSpeed(){
    speedRange.value = getNormalizedSpeed(state.speed);
    speedTxt.innerText = state.speed;
}

function getNormalizedSpeed(speed){
    return speed * NORMALIZE_RATE;
}

function addListenerRange(){
    speedRange.oninput = onRangeValueChange;
}

function onRangeValueChange(){
    state.speed = getRealSpeed(this.value)
    updateSpeed();
}

function getRealSpeed(speed){
    return speed / NORMALIZE_RATE;
}
