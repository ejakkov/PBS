import { LightningElement } from 'lwc';

export default class ErrorModalDescription extends LightningElement {
    
    codeSnippet = `<pre><code>&lt;c-error-modal&gt&lt;/c-error-modal&gt;
&lt;c-custom-event-service&gt&lt;/c-custom-event-service&gt;
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

}