import { LightningElement, wire} from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import CONTACT_US_MESSAGE_CHANNEL from '@salesforce/messageChannel/contactUsMessageChannel__c';
import createCase from '@salesforce/apex/CreateCase.createCaseFromForm';
import validationService from 'c/validationService';

export default class ContactUsModal extends LightningElement {
    @wire(MessageContext)

       messageContext;
       
    descriptionValue = '';
    emailValue = '';
    isSubmitDisabled = true;
    emailValid = false;
    emailError = '';
    submitBtnText;
    closeBtnText;
    typingPlaceholder;
    emailLabel;
    descriptionLabel;
    headerText;
    connectedCallback() {
        this.handleSubscribe();
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    handleSubscribe() {
        if(!this.subscription) {
            this.subscription = subscribe(this.messageContext, CONTACT_US_MESSAGE_CHANNEL,
                (parameter)=>{
                    const modal = this.template.querySelector("c-base-modal");
                    this.submitBtnText = parameter.submBtn;
                    this.closeBtnText = parameter.clBtn;
                    this.typingPlaceholder = parameter.typPlc;
                    this.emailLabel = parameter.emLbl;
                    this.descriptionLabel = parameter.descLbl;
                    this.headerText = parameter.headerTxt;
                    modal.open()
                }
                )
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription=null;
    }

    handleTextChange(event) {
        this.descriptionValue = event.target.value;
        this.checkFormValidity();
    }

    handleEmailChange(event) {
        this.emailValue = event.target.value;
        this.emailValid = validationService.isValidEmail(this.emailValue);
        let emailCmp = this.template.querySelector(".emailInput");
        if (this.emailValid == false) {
            emailCmp.setCustomValidity('Please enter a valid email address.');
            emailCmp.reportValidity();
        } else {
            emailCmp.setCustomValidity('');

        }
        this.checkFormValidity();
    }

    checkFormValidity() {
        this.isSubmitDisabled = !this.emailValid || this.descriptionValue.length < 3;
    }


    closeModal() {
      const modal = this.template.querySelector("c-base-modal");
      modal.close();
    }

    handleSubmit() {
        createCase({ descriptionPar: this.emailValue, emailPar: this.descriptionValue })
            .then(result => {
                this.descriptionValue = '';
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