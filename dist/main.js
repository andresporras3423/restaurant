(()=>{"use strict";class e{constructor(e,t,a,n){this.name=e,this.price=t,this.image=a,this.description=n}}({divContent:document.getElementById("content"),nav:document.createElement("nav"),divNav:document.createElement("div"),loadNav(){this.nav.className="navbar navbar-expand-lg navbar-dark bg-dark",this.divNav.className="navbar-nav",["Home","Menu","Content"].forEach(((e,t)=>{let a=document.createElement("a");a.text=e,a.className=0==t?"nav-item nav-link active":"nav-item nav-link",this.divNav.appendChild(a)})),this.nav.appendChild(this.divNav),this.divContent.appendChild(this.nav)}}).loadNav(),{divContent:document.getElementById("content"),divHome:document.createElement("div"),h3:document.createElement("h3"),image:document.createElement("img"),p:document.createElement("p"),loadDivHome(){this.divContent.appendChild(this.divHome),this.loadHead(),this.loadImage(),this.loadParagraph()},loadHead(){this.h3.innerText="Sushitaki",this.divHome.appendChild(this.h3)},loadImage(){this.image.src="../data/sushitaki.jpg",this.divHome.appendChild(this.image)},loadParagraph(){this.p.innerText="Japan has put raw fish on the culinary map. You can now find sushi across the world, from South America \n            to Northern Europe, unadulterated, in fusion cuisine, or in the finest fancy restaurants. However, nowhere does it better \n            than its homeland. Originally scoffed at by the Michelin Guide, there are now sushi chefs with three stars, acclaimed for their \n            ingredients, technique and, of course, taste. From your classic sashimi to a full-on omakase menu, we pick the best of the best \n            sushi Japan has to offer.",this.divHome.appendChild(this.p)},loadContentStyles(){}}.loadDivHome(),{divContent:document.getElementById("content"),divMenu:document.createElement("div"),h3:document.createElement("h3"),image:document.createElement("img"),p:document.createElement("p"),foodItems:[new e("Asian crunch","1200","asian-crunch","6 crispy rice bites wrapped in fresh salmon with divorce sauce."),new e("Crab croquettes","1500","crab-croquettes","Crispy crab bites accompanied by tartar sauce."),new e("Pig bath","700","pig-bath","Traditional Asian steamed breads, filled with delicious caramelized pork for 4 hours to give it a deep flavor that contrasts with the color and texture of the vegetables.."),new e("Pig gyozas","1100","pig-gyozas","Crispy oriental empanadas stuffed with pork and vegetables accompanied by a sweet and sour mustard sauce."),new e("Shrimp bath","1100","shrimp-bath","The same breads embracing inside some delicious and crunchy shrimp breaded in coconut, accompanied with mezclum, radish, cape gooseberry sauce and coconut milk."),new e("Sweet banana","1800","sweet-banana","Ripe banana slices that wrap an incredible mix of Kani Osaki, Wakame, Japanese mayonnaise and togarashi (a spectacular mix of spices), served in a bath with house molasses.")],loadDivMenu(){this.divMenu.className="item-style margin-menu",this.divContent.appendChild(this.divMenu),this.loadItems()},loadItems(){this.foodItems.forEach((e=>{let t=document.createElement("div");t.className="item-style border-items";let a=document.createElement("h4");a.innerText=e.name;let n=document.createElement("h6");n.innerText=`price: $${e.price}`;let i=document.createElement("p");i.innerText=e.description;let o=document.createElement("div"),d=document.createElement("img");d.src=`../data/sushi-images/${e.image}.jpg`,o.appendChild(d),t.appendChild(a),t.appendChild(n),t.appendChild(i),t.appendChild(o),this.divMenu.appendChild(t)}))}}.loadDivMenu(),{divContent:document.getElementById("content"),divContact:document.createElement("div"),headContact:document.createElement("h3"),paragraphContact:document.createElement("p"),formContact:document.createElement("form"),loadDivContact(){this.divContent.appendChild(this.divContact),this.divContact.appendChild(this.headContact),this.divContact.appendChild(this.paragraphContact),this.divContact.appendChild(this.formContact),this.loadForm()},loadForm(){this.loadFormName(),this.loadFormEmail(),this.loadFormMessage(),this.loadFormSubmit()},loadFormName(){let e=document.createElement("label");e.innerText="Name";let t=document.createElement("input");t.type="text",t.placeholder="Your name",t.className="form-control",this.formContact.appendChild(e),this.formContact.appendChild(t)},loadFormEmail(){let e=document.createElement("label");e.innerText="Email";let t=document.createElement("input");t.placeholder="your@email",t.type="email",t.className="form-control",this.formContact.appendChild(e),this.formContact.appendChild(t)},loadFormMessage(){let e=document.createElement("label");e.innerText="message";let t=document.createElement("textarea");t.className="form-control",t.placeholder="Your message",this.formContact.appendChild(e),this.formContact.appendChild(t)},loadFormSubmit(){let e=document.createElement("input");e.type="submit",e.className="btn btn-primary",this.formContact.appendChild(e)}}.loadDivContact()})();