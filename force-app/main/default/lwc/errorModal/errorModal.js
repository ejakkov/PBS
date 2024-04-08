import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, api, wire } from 'lwc';
import errorMessage from "@salesforce/label/c.PBS_Error_Message";
import headerText from "@salesforce/label/c.PBS_Error_Header";
import closeBtn from "@salesforce/label/c.PBS_Error_CloseBtn";
import contactBtn from "@salesforce/label/c.PBS_Error_ContactBtn";
import CUSTOM_MESSAGE_CHANNEL from '@salesforce/messageChannel/CustomMessageChannel__c';

export default class ErrorModal extends LightningElement {

    @api allowSubmit;
    @api customHeader;
    @api customBody;
    label = {
        errorMessage,
        headerText,
        closeBtn,
        contactBtn
      };
    @api isModalOpen = false;
    subscription = null;
    @wire (MessageContext) messageContext
    connectedCallback() {
        this.handleSubscribe();
        if (this.customHeader) {
            this.label.headerText = this.customHeader;
        }
        if (this.customBody) {
            this.label.errorMessage = this.customBody;
        }
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
        this.isModalOpen = false;
    }

    handleSubscribe() {
        if(!this.subscription) {
            this.subscription = subscribe(this.messageContext, CUSTOM_MESSAGE_CHANNEL,
                (parameter)=>{
                    if (parameter.targetModal == 'Error Modal'){
                        const modal = this.template.querySelector("c-base-modal");
                        modal.open();
                    }
                    
                }
                )
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription=null;
        this.isModalOpen = false;
    }

    closeModal() {
      this.isModalOpen = false;
      const modal = this.template.querySelector("c-base-modal");
      modal.close();
    }

    openContactUs() {
        console.log('contact us');
        let payload = {targetModal:'Contact Us Modal'};
        publish(this.messageContext, CUSTOM_MESSAGE_CHANNEL, payload);
    }
}