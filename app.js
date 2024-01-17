let inputText = document.getElementById('input-textarea');
let btnTranslate = document.getElementById('btn-translate');
let btnReset = document.getElementById('btn-reset');
let outPut = document.getElementById('output-textarea');
let serverURL = 'https://api.funtranslations.com/translate/minion.json'
function getserverURL(inputText){
        return serverURL + "?"+"text="+ inputText
}
function errorHandler(error){
    console.log('error occured',error)
    alert('something wrong with server try again after  some time');
}
function Translate(){
    let changeText = inputText.value;
    fetch(getserverURL(changeText))
    .then(Response => Response.json())
    .then(function changeFun(changeText){
        return outPut.innerHTML = changeText.contents.translated
    })
    .catch(errorHandler);
}
btnReset.addEventListener('click',()=>{
    inputText.value = ''
    outPut.innerHTML = ''
})
btnTranslate.addEventListener('click',Translate);