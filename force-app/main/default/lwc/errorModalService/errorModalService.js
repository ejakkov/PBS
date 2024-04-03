import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import CustomMessageChannel from '@salesforce/messageChannel/CustomMessageChannel__c';
export default class ErrorModalService extends LightningElement {
    @wire(MessageContext)
    messageContext;
    isModalOpen = true;
    publishEvent() {
        let payload = {isModalOpen:this.isModalOpen};
        publish(this.messageContext, CustomMessageChannel, payload);
    }
}
