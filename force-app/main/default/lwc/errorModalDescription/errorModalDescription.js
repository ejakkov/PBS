import { LightningElement, wire } from 'lwc';
import errorModalService from "c/errorModalService";
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
    handleModal() {
        errorModalService.openErrorModal();
    }
  
}