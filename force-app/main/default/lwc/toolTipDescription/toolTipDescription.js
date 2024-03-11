import { LightningElement } from 'lwc';

export default class ToolTipDescription extends LightningElement {
codeSnippet = `<pre><code class="language-html">&lt;div class="container"&gt;
    &lt;p class="slds-text-heading_large"&gt;Address&lt;/p&gt;
    &lt;p class="slds-text-heading_medium"&gt;Current address:
        &lt;c-tool-tip link-text="Hover me please"&gt;
            &lt;span slot="tooltipText"&gt;Please confirm your client's current address&lt;/span&gt;
        &lt;/c-tool-tip&gt;
    &lt;/p&gt;
&lt;/div&gt;</code></pre>`;
apiAttributes = [
    {
        id: '1',
        apiName: 'icon-type',
        defaultValue: 'utility:info',
        description: 'Sets the icon type'
    },
    {
        id: '2',
        apiName: 'link-text',
        defaultValue: 'null',
        description: 'Adds a link text instead of an icon'
    },
    {
        id: '3',
        apiName: 'link',
        defaultValue: 'null',
        description: 'Adds a link to the link-text'
    }
];
}