export default function pageLoad(){
    return{
        divContent : document.getElementById('content'),
        h3 : document.createElement("H3"),
        image : document.createElement("img"),
        p : document.createElement("p"),
        loadHead(){
            this.h3.innerText="Sushitaki";
            this.divContent.appendChild(this.h3);
        },
        loadImage(){
            this.image.src="../data/sushitaki.jpg";
            this.divContent.appendChild(this.image);
        },
        loadParagraph(){
            this.p.innerText=`Japan has put raw fish on the culinary map. You can now find sushi across the world, from South America 
            to Northern Europe, unadulterated, in fusion cuisine, or in the finest fancy restaurants. However, nowhere does it better 
            than its homeland. Originally scoffed at by the Michelin Guide, there are now sushi chefs with three stars, acclaimed for their 
            ingredients, technique and, of course, taste. From your classic sashimi to a full-on omakase menu, we pick the best of the best 
            sushi Japan has to offer.`;
            this.divContent.appendChild(this.p);
        },
        loadContentStyles(){
            
        }
    }
};