import { LightningElement } from 'lwc';

export default class MetadataFormDescription extends LightningElement {
    codeSnippet = `<pre><code>&lt;c-metadata-form&gt&lt;/c-metadata-form&gt;
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