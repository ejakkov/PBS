import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import CustomMessageChannel from '@salesforce/messageChannel/CustomMessageChannel__c';
export default class CustomEventService extends LightningElement {
    @wire(MessageContext)
    messageContext;
    isModalOpen = true;
    publishEvent() {
        const message = {
            someData: 'Your data here' // Customize as needed
        };
        let payload = {isModalOpen:this.isModalOpen};
        console.log('m context',this.messageContext);
        publish(this.messageContext, CustomMessageChannel, payload);
    }
}
