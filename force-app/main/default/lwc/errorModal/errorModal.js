import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, api, wire } from 'lwc';
import CUSTOM_MESSAGE_CHANNEL from '@salesforce/messageChannel/CustomMessageChannel__c';

export default class ErrorModal extends LightningElement {



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
            this.subscription = subscribe(this.messageContext, CUSTOM_MESSAGE_CHANNEL,
                (parameter)=>{
                        const modal = this.template.querySelector("c-base-modal");
                        this.errorMessage = parameter.errMsg;
                        this.headerText = parameter.headerTxt;
                        this.closeButton = parameter.clBtn;
                        this.contactButton = parameter.conBtn;
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
    }

}