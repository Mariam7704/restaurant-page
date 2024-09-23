import "./styles.css" ;
import * as home from "./home.js";
import * as menu from "./menu.js";
import * as contact from "./contact.js";

const homeBtn=document.querySelector('#home');
const menuBtn=document.querySelector('#menu');
const contactBtn=document.querySelector('#contact');
const buttons=document.querySelectorAll('button');
const content=document.querySelector('#content');

home.homeContent(content);

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function buttonColor(e){
    buttons.forEach(button=>{
        button.style.color='#fff';
        button.style.borderBottom='2px solid #fff';
    });

    e.target.style.color='#d78f1c';
    e.target.style.borderBottom='2px solid #d78f1c'
}

homeBtn.addEventListener('click',(e)=>{
    buttonColor(e);
    clearContent();
    home.homeContent(content);
});

menuBtn.addEventListener('click',(e)=>{
    buttonColor(e);
    clearContent();
    menu.menuContent(content);
});

contactBtn.addEventListener('click',(e)=>{
    buttonColor(e);
    clearContent();
    contact.contactContent(content);
});







