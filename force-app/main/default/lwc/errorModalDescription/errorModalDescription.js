import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import errorModalService from "c/errorModalService";
import CUSTOM_MESSAGE_CHANNEL from '@salesforce/messageChannel/CustomMessageChannel__c';

export default class ErrorModalDescription extends LightningElement {
    
    codeSnippet = `<pre><code>&lt;c-error-modal&gt&lt;/c-error-modal&gt;
</code></pre>`;
    
    apiAttributes = [
        {
            id: '1',
            apiName: 'customHeader',
            defaultValue: '-',
            description: 'Sets a custom header for the error'
        },
        {
            id: '2',
            apiName: 'customBody',
            defaultValue: '-',
            description: 'Sets a custom body for the error'
        }
    ];
    @wire(MessageContext)
    messagecontext;

    handleModal() {
        let payload = {targetModal:'Error Modal'};
        publish(this.messagecontext, CUSTOM_MESSAGE_CHANNEL, payload);
    }
  
}