import pageLoad from './page-load';
import homeLoad from './home-load';
import menuLoad from './menu-load';
import contactLoad from './contact-load';

pageLoad().loadNav();
homeLoad().loadDivHome();
menuLoad().loadDivMenu();
contactLoad().loadDivContact();

let activeIndex = 0;

function updateContent(index) {
  if (index !== activeIndex) {
    const oldTab = document.getElementById(`tab${activeIndex}`);
    const oldDiv = document.getElementById(`div${activeIndex}`);
    const newTab = document.getElementById(`tab${index}`);
    const newDiv = document.getElementById(`div${index}`);
    oldTab.classList.remove('active');
    oldDiv.classList.add('d-none');
    newTab.classList.add('active');
    newDiv.classList.remove('d-none');
    activeIndex = index;
  }
}

function addTabClickEvent() {
  const tabs = document.getElementsByClassName('tab-event');
  [...tabs].forEach((tab, index) => {
    tab.onclick = function callUpdateContent() { updateContent(index); };
  });
}

addTabClickEvent();