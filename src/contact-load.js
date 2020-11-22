export default function contactLoad() {
  return {
    divContent: document.getElementById('content'),
    divContact: document.createElement('div'),
    headContact: document.createElement('h3'),
    paragraphContact: document.createElement('p'),
    formContact: document.createElement('form'),
    loadDivContact() {
      this.divContact.id = 'div2';
      this.divContact.classList.add('d-none');
      this.divContact.classList.add('div-contact-styles');
      this.formContact.classList.add('margin-form-items');
      this.divContent.appendChild(this.divContact);
      this.divContact.appendChild(this.headContact);
      this.loadHeadContactContent();
      this.loadparagraphContactContent();
      this.divContact.appendChild(this.paragraphContact);
      this.divContact.appendChild(this.formContact);
      this.loadForm();
    },
    loadHeadContactContent() {
      this.headContact.classList.add('text-center');
      this.headContact.innerText = 'Contact us';
    },
    loadparagraphContactContent() {
      this.paragraphContact.classList.add('text-justify');
      this.paragraphContact.innerText = 'Provided you want to reach us out, please complete the next form. Any suggestion, complain, comment or business opportunitty you have on mind.';
    },
    loadForm() {
      this.loadFormName();
      this.loadFormEmail();
      this.loadFormMessage();
      this.loadFormSubmit();
    },
    loadFormName() {
      const name = document.createElement('label');
      name.innerText = 'Name';
      const inputName = document.createElement('input');
      inputName.type = 'text';
      inputName.placeholder = 'Your name';
      inputName.className = 'form-control';
      this.formContact.appendChild(name);
      this.formContact.appendChild(inputName);
    },
    loadFormEmail() {
      const email = document.createElement('label');
      email.innerText = 'Email';
      const inputEmail = document.createElement('input');
      inputEmail.placeholder = 'your@email';
      inputEmail.type = 'email';
      inputEmail.className = 'form-control';
      this.formContact.appendChild(email);
      this.formContact.appendChild(inputEmail);
    },
    loadFormMessage() {
      const message = document.createElement('label');
      message.innerText = 'message';
      const textArea = document.createElement('textarea');
      textArea.className = 'form-control';
      textArea.placeholder = 'Your message';
      this.formContact.appendChild(message);
      this.formContact.appendChild(textArea);
    },
    loadFormSubmit() {
      const inputSubmit = document.createElement('input');
      inputSubmit.type = 'submit';
      inputSubmit.className = 'btn btn-primary';
      this.formContact.appendChild(inputSubmit);
    },
  };
}