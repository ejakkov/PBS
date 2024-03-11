import { LightningElement } from 'lwc';

export default class CardBaseDescription extends LightningElement {
    myVal = `<pre><code class="language-html">&lt;c-card-base class="custom-card"&gt;\n    &lt;div slot="header"&gt;Header Content&lt;/div&gt;\n    &lt;div slot="header-actions"&gt;\n        &lt;lightning-button class="brand-pbs" variant="destructive" label="Action 1"&gt;&lt;/lightning-button&gt;\n        &lt;lightning-button class="brand-outline-pbs" variant="destructive-text" label="Action 2"&gt;&lt;/lightning-button&gt;\n    &lt;/div&gt;\n    &lt;div slot="body"&gt;Body Content&lt;/div&gt;\n    &lt;div slot="footer-buttons"&gt;\n        &lt;lightning-button variant="destructive" label="Exit"&gt;&lt;/lightning-button&gt;\n        &lt;lightning-button variant="destructive-text" label="Accept"&gt;&lt;/lightning-button&gt;\n    &lt;/div&gt;\n&lt;/c-card-base></code></pre>`;
}