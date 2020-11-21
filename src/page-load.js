export default function pageLoad(){
    return{
        divContent : document.getElementById('content'),
        nav : document.createElement("nav"),
        divNav : document.createElement("div"),
        divHome : document.createElement("div"),
        divMenu : document.createElement("div"),
        divContacts : document.createElement("div"),
        h3 : document.createElement("h3"),
        image : document.createElement("img"),
        p : document.createElement("p"),
        loadNav(){
            debugger;
            this.nav.className="navbar navbar-expand-lg navbar-dark bg-dark";
            this.divNav.className="navbar-nav";
            ["Home", "Menu", "Content"].forEach((item, index)=>{
                let a = document.createElement("a");
                a.text = item;
                if(index==0) a.className = "nav-item nav-link active";
                else a.className = "nav-item nav-link";
                this.divNav.appendChild(a);
            });
            this.nav.appendChild(this.divNav);
            this.divContent.appendChild(this.nav);
        },
        loadDivHome(){
            this.divContent.appendChild(this.divHome);
        },
        loadDivMenu(){
            this.divContent.appendChild(this.divMenu);
        },
        loadDivContacts(){
            this.divContent.appendChild(this.divContacts);
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