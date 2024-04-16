import { LightningElement, wire} from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import CONTACT_US_MESSAGE_CHANNEL from '@salesforce/messageChannel/contactUsMessageChannel__c';
import createCase from '@salesforce/apex/CreateCase.createCaseFromForm';
import validationService from 'c/validationService';
import submitBtnLabel from "@salesforce/label/c.PBS_ContactUs_SubmitBtn";
import descLabel from "@salesforce/label/c.PBS_ContactUs_DescriptionLabel";
import emLabel from "@salesforce/label/c.PBS_ContactUs_EmailLabel";
import typingPlaceholderLabel from "@salesforce/label/c.PBS_ContactUs_Placeholder";
import closeBtnLabel from "@salesforce/label/c.PBS_Error_CloseBtn";
import contactUsLabel from "@salesforce/label/c.PBS_Error_ContactBtn";

export default class ContactUsModal extends LightningElement {
    @wire(MessageContext)

       messageContext;
       
    descriptionValue = '';
    emailValue = '';
    isSubmitDisabled = true;
    emailValid = false;
    emailError = '';
    submitBtnText = submitBtnLabel;
    closeBtnText = closeBtnLabel;
    typingPlaceholder = typingPlaceholderLabel;
    emailLabel = emLabel;
    descriptionLabel = descLabel;
    headerText = contactUsLabel;
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