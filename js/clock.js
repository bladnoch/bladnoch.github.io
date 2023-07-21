
/**
 * clock.js: display time on website
 * @author DoungukKim
 * @since 7/21/2023
 * @version v0.0.1
 */


const clock=document.querySelector("h2#clock");

count=0;
function getClock(){
    const date= new Date();
    const hrs=String(date.getHours()).padStart(2,"0");
    const mins=String(date.getMinutes()).padStart(2,"0")
    const secs =String(date.getSeconds()).padStart(2,"0")
    clock.innerText=`${hrs} : ${mins} : ${secs}`
}

getClock();
setInterval(getClock,1000);