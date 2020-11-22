import pageLoad from './page-load.js';
import homeLoad from './home-load.js';
import menuLoad from './menu-load.js';
import contactLoad from './contact-load.js';

pageLoad().loadNav();
homeLoad().loadDivHome();
menuLoad().loadDivMenu();
contactLoad().loadDivContact();

let activeIndex = 0;

function updateContent(index){
    if(index!=activeIndex){
        let oldTab = document.getElementById(`tab${activeIndex}`);
        let oldDiv = document.getElementById(`div${activeIndex}`);
        let newTab = document.getElementById(`tab${index}`);
        let newDiv = document.getElementById(`div${index}`);
        oldTab.classList.remove("active");
        oldDiv.classList.add("d-none");
        newTab.classList.add("active");
        newDiv.classList.remove("d-none");
        activeIndex=index;
    }
}

function addTabClickEvent(){
    let tabs = document.getElementsByClassName('tab-event');
    [...tabs].forEach((tab, index)=>{
        tab.onclick = function(){updateContent(index)};
    });
}

addTabClickEvent();