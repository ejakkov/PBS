import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, api, wire } from 'lwc';
import CustomMessageChannel from '@salesforce/messageChannel/customMessageChannel__c';
import errorMessage from "@salesforce/label/c.PBS_Error_Message";
import headerText from "@salesforce/label/c.PBS_Error_Header";
import closeBtn from "@salesforce/label/c.PBS_Error_CloseBtn";
import contactBtn from "@salesforce/label/c.PBS_Error_ContactBtn";

export default class ErrorModal extends LightningElement {
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
            this.subscription = subscribe(this.messageContext, CustomMessageChannel,
                (parameter)=>{
                    this.isModalOpen= parameter.isModalOpen;      
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
    }
}