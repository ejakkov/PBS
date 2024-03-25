import { LightningElement } from 'lwc';

export default class CardBaseDescription extends LightningElement {
    codeSnippet = `
    <pre><code>&lt;c-card-base is-footer-centered="true" is-separator-visible="true"&gt;
    &lt;div slot="header"&gt;Header Content&lt;/div&gt;
    &lt;div slot="header-actions"&gt;
        &lt;lightning-button class="brand-pbs slds-m-left_xx-small" variant="destructive" label="Action 1"&gt;&lt;/lightning-button&gt;
        &lt;lightning-button class="brand-outline-pbs slds-m-left_xx-small" variant="destructive-text" label="Action 2"&gt;&lt;/lightning-button&gt;
    &lt;/div&gt;
    &lt;div slot="footer-buttons"&gt;
        &lt;lightning-button class="slds-m-left_xx-small" variant="destructive" label="Exit"&gt;&lt;/lightning-button&gt;
        &lt;lightning-button class="slds-m-left_xx-small" variant="destructive-text" label="Accept"&gt;&lt;/lightning-button&gt;
    &lt;/div&gt;
&lt;/c-card-base&gt;</code></pre>`;

    apiAttributes = [
        {
            id: '1',
            apiName: 'variant',
            defaultValue: 'A',
            description: 'Sets the card base variant'
        },
        {
            id: '2',
            apiName: 'is-separator-visible',
            defaultValue: 'false',
            description: 'Sets a separator line between header and body'
        },
        {
            id: '3',
            apiName: 'is-footer-centered',
            defaultValue: 'false',
            description: 'Makes the footer centered'
        }
    ];
}