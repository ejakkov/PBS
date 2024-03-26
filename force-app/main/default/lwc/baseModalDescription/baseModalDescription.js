import { LightningElement} from 'lwc';

export default class BaseModalDescription extends LightningElement {
    codeSnippet = `<pre><code>&lt;c-base-modal&gt;
    &lt;span slot="headerText"&gt;Lorem ipsum dolor&lt;/span&gt;
    &lt;span slot="body"&gt;Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.
    &lt;/span&gt;
&lt;/c-base-modal&gt;</code></pre>`;
    
    apiAttributes = [
        {
            id: '1',
            apiName: 'open()',
            defaultValue: '-',
            description: 'Method for opening the modal'
        }
    ];

    handleOpenModal() { 
        const modal = this.template.querySelector("c-base-modal");
        modal.open();
      }
}