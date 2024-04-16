import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import ERROR_MESSAGE_CHANNEL from '@salesforce/messageChannel/errorMessageChannel__c';
import errorModalService from "c/errorModalService";
import createCaseAutomatically from '@salesforce/apex/CreateCase.createCaseAutoSubmission';
import errorMessageLabel from "@salesforce/label/c.PBS_Error_Message";
import headerTextLabel from "@salesforce/label/c.PBS_Error_Header";
import closeBtnLabel from "@salesforce/label/c.PBS_Error_CloseBtn";
import contactBtnLabel from "@salesforce/label/c.PBS_Error_ContactBtn";
export default class ErrorModal extends LightningElement {
    autoSubmission = false; // default auto-submission value
    allowSubmit = true; // default submit button value
    errorMessage = errorMessageLabel; // default error message
    headerText = headerTextLabel; // default header
    closeButton = closeBtnLabel;
    contactButton = contactBtnLabel;
    subscription = null;
    @wire (MessageContext) messageContext
    connectedCallback() {
        this.handleSubscribe();
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    handleSubscribe() {
        if(!this.subscription) {
            this.subscription = subscribe(this.messageContext, ERROR_MESSAGE_CHANNEL,
                (parameter)=>{
                        const modal = this.template.querySelector("c-base-modal");
                        if (parameter.errMsg) this.errorMessage = parameter.errMsg;
                        if (parameter.headerTxt) this.headerText = parameter.headerTxt;
                        if (parameter.allowSub != undefined) this.allowSubmit = parameter.allowSub;
                        if (parameter.autoSubm != undefined) this.autoSubmission = parameter.autoSubm;
                        modal.open();
                }
                )
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription=null;
    }

    closeModal() {
      const modal = this.template.querySelector("c-base-modal");
      modal.close();
      if (this.autoSubmission) {
        createCaseAutomatically()
            .then(result => {
                console.log('Case created successfully');
            })
            .catch(error => {
                console.error('Error creating case:', error);
            });
      }
    }

    openContactUs() {
        errorModalService.openContactUs();
    }
}