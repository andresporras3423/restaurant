import pageLoad from './page-load.js';
import homeLoad from './home-load.js';
import menuLoad from './menu-load.js';

let pLoad = pageLoad();
pLoad.loadNav();
let hLoad = homeLoad();
hLoad.loadDivHome();
let mLoad = menuLoad();
mLoad.loadDivMenu();