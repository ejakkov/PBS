import { LightningElement } from 'lwc';

export default class CardBaseDescription extends LightningElement {
    codeSnippet = `
    <pre><code>&lt;c-card-base class="custom-card" is-footer-centered="true"&gt;
    &lt;div slot="header"&gt;Header Content&lt;/div&gt;
    &lt;div slot="header-actions"&gt;
        &lt;lightning-button class="brand-pbs" variant="destructive" label="Action 1"&gt;&lt;/lightning-button&gt;
        &lt;lightning-button class="brand-outline-pbs" variant="destructive-text" label="Action 2"&gt;&lt;/lightning-button&gt;
    &lt;/div&gt;
    &lt;div slot="body"&gt;{defaultBodyText}&lt;/div&gt;
    &lt;div slot="footer-buttons"&gt;
        &lt;lightning-button variant="destructive" label="Exit"&gt;&lt;/lightning-button&gt;
        &lt;lightning-button variant="destructive-text" label="Accept"&gt;&lt;/lightning-button&gt;
    &lt;/div&gt;
&lt;/c-card-base&gt;</code></pre>`;

    defaultBodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ex ut mi pulvinar volutpat. Aliquam hendrerit nibh quis nulla molestie'
                            + 'venenatis. Quisque maximus, purus ut dapibus iaculis, lorem tortor rutrum neque, ut aliquam urna urna vitae ipsum.'
                                +'Nullam varius eros sit amet velit pulvinar, sit amet mollis libero malesuada.';
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
            description: 'Makes a footer centered'
        }
    ];
}