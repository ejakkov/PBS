import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, api, wire } from 'lwc';
import ERROR_MESSAGE_CHANNEL from '@salesforce/messageChannel/errorMessageChannel__c';
import errorModalService from "c/errorModalService";
import createCaseAutomatically from '@salesforce/apex/CreateCase.createCaseAutoSubmission';
export default class ErrorModal extends LightningElement {
    autoSubmission = false;
    allowSubmit;
    errorMessage;
    headerText;
    closeButton;
    contactButton;
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
                        console.log(parameter)
                        this.errorMessage = parameter.errMsg;
                        this.headerText = parameter.headerTxt;
                        this.closeButton = parameter.clBtn;
                        this.contactButton = parameter.conBtn;
                        this.allowSubmit = parameter.allowSub;
                        this.autoSubmission = parameter.autoSubm;
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