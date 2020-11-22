export default function contactLoad(){
    return {
        divContent : document.getElementById('content'),
        divContact : document.createElement("div"),
        headContact : document.createElement("h3"),
        paragraphContact : document.createElement("p"),
        formContact : document.createElement("form"),
        loadDivContact(){
            this.divContact.id="div2";
            this.divContact.classList.add("d-none");
            this.divContent.appendChild(this.divContact);
            this.divContact.appendChild(this.headContact);
            this.divContact.appendChild(this.paragraphContact);
            this.divContact.appendChild(this.formContact);
            this.loadForm();
        },
        loadForm(){
            this.loadFormName();
            this.loadFormEmail();
            this.loadFormMessage();
            this.loadFormSubmit();
        },
        loadFormName(){
            let name = document.createElement("label");
            name.innerText="Name";
            let inputName = document.createElement("input");
            inputName.type="text";
            inputName.placeholder="Your name";
            inputName.className="form-control";
            this.formContact.appendChild(name);
            this.formContact.appendChild(inputName);
        },
        loadFormEmail(){
            let email = document.createElement("label");
            email.innerText="Email";
            let inputEmail = document.createElement("input");
            inputEmail.placeholder="your@email";
            inputEmail.type="email";
            inputEmail.className="form-control";
            this.formContact.appendChild(email);
            this.formContact.appendChild(inputEmail);
        },
        loadFormMessage(){
            let message = document.createElement("label");
            message.innerText="message";
            let textArea = document.createElement("textarea");
            textArea.className="form-control";
            textArea.placeholder="Your message";
            this.formContact.appendChild(message);
            this.formContact.appendChild(textArea);
        },
        loadFormSubmit(){
            let inputSubmit = document.createElement("input");
            inputSubmit.type="submit";
            inputSubmit.className="btn btn-primary";
            this.formContact.appendChild(inputSubmit);
        }
    }
};