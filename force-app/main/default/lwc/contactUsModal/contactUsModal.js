import { LightningElement, api, wire, track } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import CONTACT_US_MESSAGE_CHANNEL from '@salesforce/messageChannel/contactUsMessageChannel__c';
import createCase from '@salesforce/apex/CreateCase.createCaseFromForm';

export default class ContactUsModal extends LightningElement {
    @wire(MessageContext)

       messageContext;
    connectedCallback() {
        this.handleSubscribe();
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    handleSubscribe() {
        if(!this.subscription) {
            this.subscription = subscribe(this.messageContext, CONTACT_US_MESSAGE_CHANNEL,
                ()=>{
                    const modal = this.template.querySelector("c-base-modal");
                    modal.open()
                }
                )
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription=null;
    }

    @track textValue = '';
    @track isSubmitDisabled = true;
    @track emailValid = false;

    @track email;
    @track description;


    handleTextChange(event) {
        this.textValue = event.target.value;
        this.checkFormValidity();
    }

    handleEmailChange(event) {
        const emailInput = event.target;
        this.emailValid = emailInput.checkValidity();
        this.checkFormValidity();
    }

    checkFormValidity() {
        this.isSubmitDisabled = !this.emailValid || this.textValue.length < 3;
    }


    closeModal() {
      const modal = this.template.querySelector("c-base-modal");
      modal.close();
    }

    handleSubmit() {
        console.log('handleSubmit');
        createCase({ descriptionPar: this.textValue, emailPar: this.email })
            .then(result => {
                this.textValue = '';
                this.email = '';
                this.emailValid = false;
                this.isSubmitDisabled = true;
                this.closeModal();
            })
            .catch(error => {
                console.error('Error creating case:', error);
            });
    }
}