import { LightningElement } from 'lwc';

export default class ToolTipDescription extends LightningElement {
myVal = `<pre><code class="language-html">&lt;div class="container"&gt;\n    &lt;p class="slds-text-heading_large"&gt;Address&lt;/p&gt;\n    &lt;p class="slds-text-heading_medium"&gt;Current address:\n        &lt;c-tool-tip link-text="Hover me please"&gt;\n            &lt;span slot="tooltipText"&gt;Please confirm your client's current address&lt;/span&gt;\n        &lt;/c-tool-tip&gt;\n    &lt;/p&gt;\n&lt;/div&gt;</code></pre>`;


}