
import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import CUSTOM_MESSAGE_CHANNEL from '@salesforce/messageChannel/CustomMessageChannel__c';

export default class ErrorModalService extends LightningElement {
    @wire(MessageContext)
    messageContext;

    renderedCallback() {
        this.handleClick();
    }

    handleClick() {
        if (this.messageContext) {
            console.log('Message Context available');
            // Implement your logic here
        }
    }
}

export { ErrorModalService };