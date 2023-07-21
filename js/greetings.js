/**
 * greetings.js : login and greeting after login
 * @author DoungukKim
 * @since 7/3/2023
 * @version v0.0.1
 */
const loginInput= document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const greeting =document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLogSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    console.log(username);
    paintGreeting(username);
}
function handleLinkClick(event){
    event.preventDefault();
}

loginForm.addEventListener("submit",onLogSubmit);
// link.addEventListener("click",handleLinkClick);

function paintGreeting(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLogSubmit);
} else{
    paintGreeting(savedUsername);
}