import { LightningElement } from 'lwc';
import errorModalService from "c/errorModalService";
export default class contactUsModalDescription extends LightningElement {
    
    codeSnippet = `<pre><code>&lt;c-contact-us-modal&gt&lt;/c-contact-us-modal&gt;
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
        errorModalService.openContactUs();
    }
  
}