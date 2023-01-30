//Arquivo que contem todas as chamadas de api do navegador

//Esse evento ocorre quando a extensao é instalada
function onExtensionInstalled(listener){
    chromeRuntimeOnInstalledAddListener(listener);
}

//Esse evento ocorre quando a extensao é instalada
function chromeRuntimeOnInstalledAddListener(listener){
    chrome.runtime.onInstalled.addListener(listener);
}

//puxa da memória o estado atual da extensao
function getActive(){
    return chromeStorageLocalGet('active');
}

//seta na memória o estado da extensao que vem como parametro
function setActive(activeValue){
    return chromeStorageLocalSet({active:activeValue});
}


//Pega na memória do navegador o valor da velocidade
function getSpeed(){
    return chromeStorageLocalGet('speed');
}

function setSpeed(speedValue){
    return chromeStorageLocalSet({ speed : speedValue});
}
//verificar
function chromeStorageLocalGet(key){
    return new Promise( 
        (resolve)=>{
            chrome.storage.local.get([key],(result) =>{
                resolve(result[key])
            })
        }
    )   
}

//verificar
function chromeStorageLocalSet(object){
    return new Promise(
        (resolve)=>{
            chrome.storage.local.set(object,resolve);
        }
    )
}