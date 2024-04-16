import { LightningElement, wire } from 'lwc';
import errorModalService from "c/errorModalService";
export default class ErrorModalDescription extends LightningElement {
    
    codeSnippet = `<pre><code>&lt;c-error-modal&gt&lt;/c-error-modal&gt;
</code></pre>`;
    
    apiAttributes = [
        {
            id: '1',
            apiName: '-',
            defaultValue: '-',
            description: '-'
        }
    ];
    handleModal() {
        errorModalService.openErrorModal();
    }
  
}