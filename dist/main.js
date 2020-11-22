(()=>{"use strict";class e{constructor(e,t,a,n){this.name=e,this.price=t,this.image=a,this.description=n}}({divContent:document.getElementById("content"),nav:document.createElement("nav"),divNav:document.createElement("div"),loadNav(){this.nav.className="navbar navbar-expand-lg navbar-dark bg-dark",this.divNav.className="navbar-nav",["Home","Menu","Contact"].forEach(((e,t)=>{const a=document.createElement("a");a.text=e,a.className=0===t?"tab-event nav-item nav-link cursor-pointer active":"tab-event nav-item nav-link cursor-pointer",a.id=`tab${t}`,a.onclick="updateContent()",this.divNav.appendChild(a)})),this.nav.appendChild(this.divNav),this.divContent.appendChild(this.nav)}}).loadNav(),{divContent:document.getElementById("content"),divHome:document.createElement("div"),h3:document.createElement("h3"),divImage:document.createElement("div"),image:document.createElement("img"),p:document.createElement("p"),loadDivHome(){this.divHome.className="div-home-styles",this.divHome.id="div0",this.divContent.appendChild(this.divHome),this.loadHead(),this.loadDivImage(),this.loadParagraph()},loadHead(){this.h3.innerText="Sushitaki",this.divHome.appendChild(this.h3)},loadDivImage(){this.image.src="../data/sushitaki.jpg",this.divImage.appendChild(this.image),this.divHome.appendChild(this.divImage)},loadParagraph(){this.p.innerText="Japan has put raw fish on the culinary map. You can now find sushi across the world, from South America \n            to Northern Europe, unadulterated, in fusion cuisine, or in the finest fancy restaurants. However, nowhere does it better \n            than its homeland. Originally scoffed at by the Michelin Guide, there are now sushi chefs with three stars, acclaimed for their \n            ingredients, technique and, of course, taste. From your classic sashimi to a full-on omakase menu, we pick the best of the best \n            sushi Bogotá has to offer.",this.divHome.appendChild(this.p)}}.loadDivHome(),{divContent:document.getElementById("content"),divMenu:document.createElement("div"),h3:document.createElement("h3"),image:document.createElement("img"),p:document.createElement("p"),foodItems:[new e("Asian crunch","1200","asian-crunch","6 crispy rice bites wrapped in fresh salmon with divorce sauce."),new e("Crab croquettes","1500","crab-croquettes","Crispy crab bites accompanied by tartar sauce."),new e("Pig bath","700","pig-bath","Traditional Asian steamed breads, filled with delicious caramelized pork for 4 hours to give it a deep flavor that contrasts with the color and texture of the vegetables.."),new e("Pig gyozas","1100","pig-gyozas","Crispy oriental empanadas stuffed with pork and vegetables accompanied by a sweet and sour mustard sauce."),new e("Shrimp bath","1100","shrimp-bath","The same breads embracing inside some delicious and crunchy shrimp breaded in coconut, accompanied with mezclum, radish, cape gooseberry sauce and coconut milk."),new e("Sweet banana","1800","sweet-banana","Ripe banana slices that wrap an incredible mix of Kani Osaki, Wakame, Japanese mayonnaise and togarashi (a spectacular mix of spices), served in a bath with house molasses.")],loadDivMenu(){this.divMenu.id="div1",this.divMenu.className="item-style margin-menu d-none",this.divContent.appendChild(this.divMenu),this.loadItems()},loadItems(){this.foodItems.forEach((e=>{const t=document.createElement("div");t.className="item-style border-items";const a=document.createElement("h4");a.innerText=e.name;const n=document.createElement("h6");n.innerText=`price: $${e.price}`;const i=document.createElement("p");i.innerText=e.description;const o=document.createElement("div"),d=document.createElement("img");d.src=`../data/sushi-images/${e.image}.jpg`,o.appendChild(d),t.appendChild(a),t.appendChild(n),t.appendChild(i),t.appendChild(o),this.divMenu.appendChild(t)}))}}.loadDivMenu(),{divContent:document.getElementById("content"),divContact:document.createElement("div"),headContact:document.createElement("h3"),paragraphContact:document.createElement("p"),formContact:document.createElement("form"),loadDivContact(){this.divContact.id="div2",this.divContact.classList.add("d-none"),this.divContact.classList.add("div-contact-styles"),this.formContact.classList.add("margin-form-items"),this.divContent.appendChild(this.divContact),this.divContact.appendChild(this.headContact),this.loadHeadContactContent(),this.loadparagraphContactContent(),this.divContact.appendChild(this.paragraphContact),this.divContact.appendChild(this.formContact),this.loadForm()},loadHeadContactContent(){this.headContact.classList.add("text-center"),this.headContact.innerText="Contact us"},loadparagraphContactContent(){this.paragraphContact.classList.add("text-justify"),this.paragraphContact.innerText="Provided you want to reach us out, please complete the next form. Any suggestion, complain, comment or business opportunitty you have on mind."},loadForm(){this.loadFormName(),this.loadFormEmail(),this.loadFormMessage(),this.loadFormSubmit()},loadFormName(){const e=document.createElement("label");e.innerText="Name";const t=document.createElement("input");t.type="text",t.placeholder="Your name",t.className="form-control",this.formContact.appendChild(e),this.formContact.appendChild(t)},loadFormEmail(){const e=document.createElement("label");e.innerText="Email";const t=document.createElement("input");t.placeholder="your@email",t.type="email",t.className="form-control",this.formContact.appendChild(e),this.formContact.appendChild(t)},loadFormMessage(){const e=document.createElement("label");e.innerText="message";const t=document.createElement("textarea");t.className="form-control",t.placeholder="Your message",this.formContact.appendChild(e),this.formContact.appendChild(t)},loadFormSubmit(){const e=document.createElement("input");e.type="submit",e.className="btn btn-primary",this.formContact.appendChild(e)}}.loadDivContact();let t=0;[...document.getElementsByClassName("tab-event")].forEach(((e,a)=>{e.onclick=function(){!function(e){if(e!==t){const a=document.getElementById(`tab${t}`),n=document.getElementById(`div${t}`),i=document.getElementById(`tab${e}`),o=document.getElementById(`div${e}`);a.classList.remove("active"),n.classList.add("d-none"),i.classList.add("active"),o.classList.remove("d-none"),t=e}}(a)}}))})();