import { LightningElement } from 'lwc';

export default class MetadataFormDescription extends LightningElement {
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
}