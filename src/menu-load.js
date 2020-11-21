import foodItem from './food-item-class.js';

export default function homeLoad(){
    return{
        divContent : document.getElementById('content'),
        divMenu : document.createElement("div"),
        h3 : document.createElement("h3"),
        image : document.createElement("img"),
        p : document.createElement("p"),
        foodItems: [new foodItem("Asian crunch","1200","asian-crunch","6 crispy rice bites wrapped in fresh salmon with divorce sauce."),
        new foodItem("Crab croquettes","1500","crab-croquettes","Crispy crab bites accompanied by tartar sauce."),
        new foodItem("Pig bath","700","pig-bath","Traditional Asian steamed breads, filled with delicious caramelized pork for 4 hours to give it a deep flavor that contrasts with the color and texture of the vegetables.."),
        new foodItem("Pig gyozas","1100","pig-gyozas","Crispy oriental empanadas stuffed with pork and vegetables accompanied by a sweet and sour mustard sauce."),
        new foodItem("Shrimp bath","1100","shrimp-bath","The same breads embracing inside some delicious and crunchy shrimp breaded in coconut, accompanied with mezclum, radish, cape gooseberry sauce and coconut milk."),
        new foodItem("Sweet banana","1800","sweet-banana","Ripe banana slices that wrap an incredible mix of Kani Osaki, Wakame, Japanese mayonnaise and togarashi (a spectacular mix of spices), served in a bath with house molasses.")],
        loadDivMenu(){
            this.divMenu.className="item-style";
            this.divContent.appendChild(this.divMenu);
            this.loadItems();
        },
        loadItems(){
            this.foodItems.forEach((item)=>{
               let divItem = document.createElement("div");
               let name = document.createElement("h4");
               name.innerText = item.name;
               let price = document.createElement("p");
               price.innerText = item.price;
               let description = document.createElement("p"); 
               description.innerText = item.description;
               let image = document.createElement("img");
               image.src=`../data/sushi-images/${item.image}.jpg`;
               divItem.appendChild(name);
               divItem.appendChild(price);
               divItem.appendChild(description);
               divItem.appendChild(image);
               this.divMenu.appendChild(divItem);
            });
        }
    }
};