import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, api, wire } from 'lwc';
import CustomMessageChannel from '@salesforce/messageChannel/customMessageChannel__c';
import errorMessage from "@salesforce/label/c.PBS_Error_Message";
import headerText from "@salesforce/label/c.PBS_Error_Header";
import closeBtn from "@salesforce/label/c.PBS_Error_CloseBtn";
import contactBtn from "@salesforce/label/c.PBS_Error_ContactBtn";


export default class ErrorModal extends LightningElement {
    label = {
        errorMessage,
        headerText,
        closeBtn,
        contactBtn
      };
    isModalOpen = false;
    subscription = null;
    name='';
    @wire (MessageContext) messageContext
    connectedCallback() {
        this.handleSubscribe();
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
    }
    

    handleSubscribe() {
        if(!this.subscription) {
            console.log('subscriiibee');
            this.subscription = subscribe(this.messageContext, CustomMessageChannel,
                (parameter)=>{
                    this.isModalOpen=parameter.isModalOpen;
                    console.log('name issss',this.name);
                }
                )
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription=null;
    }


    @api open() {
    this.isOpen = true;
  }

    closeModal() {
        this.isModalOpen = false;
    }
}