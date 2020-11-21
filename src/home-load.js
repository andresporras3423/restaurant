export default function homeLoad(){
    return{
        divContent : document.getElementById('content'),
        divHome : document.createElement("div"),
        h3 : document.createElement("h3"),
        image : document.createElement("img"),
        p : document.createElement("p"),
        loadDivHome(){
            this.divContent.appendChild(this.divHome);
            this.loadHead();
            this.loadImage();
            this.loadParagraph();
        },
        loadHead(){
            this.h3.innerText="Sushitaki";
            this.divHome.appendChild(this.h3);
        },
        loadImage(){
            this.image.src="../data/sushitaki.jpg";
            this.divHome.appendChild(this.image);
        },
        loadParagraph(){
            this.p.innerText=`Japan has put raw fish on the culinary map. You can now find sushi across the world, from South America 
            to Northern Europe, unadulterated, in fusion cuisine, or in the finest fancy restaurants. However, nowhere does it better 
            than its homeland. Originally scoffed at by the Michelin Guide, there are now sushi chefs with three stars, acclaimed for their 
            ingredients, technique and, of course, taste. From your classic sashimi to a full-on omakase menu, we pick the best of the best 
            sushi Japan has to offer.`;
            this.divHome.appendChild(this.p);
        },
        loadContentStyles(){
            
        }
    }
};