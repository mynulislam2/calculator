let display= document.getElementById("display__operation")
let result=document.getElementById("display__result")
function cal(num) {
 display.innerText+=num
}
function get__result() {
result.innerText=eval(display.innerText)
}
function key__del(){
    display.innerText=display.innerText.slice(0, -1)

}
function key__ac() {
    display.innerText=""
    result.innerText=""
}