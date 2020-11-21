export default function pageLoad(){
    return{
        divContent : document.getElementById('content'),
        nav : document.createElement("nav"),
        divNav : document.createElement("div"),
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
        }
    }
};