import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import CustomMessageChannel from "@salesforce/messageChannel/customMessageChannel__c";
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
  
    modal = this.template.querySelector("c-error-modal");
  
    handleModal() {
        publish(this.messagecontext, CustomMessageChannel);
    }
  
}