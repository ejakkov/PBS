import { LightningElement, track, api } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class ComponentLibrary extends LightningElement {
    componentConstructor;
    tabs = [
        {
            id: "c/toolTipDescription",
            title: "Tool Tip",
        },
        {
            id: "c/cardBaseDescription",
            title: "Card Base",
        }
    ];

    connectedCallback() {
        import('c/toolTipDescription')
            .then(({ default: ctor }) => this.componentConstructor = ctor)
            .catch(err => console.log('Error importing component'));
    }

    renderedCallback() {
        loadStyle(this, cssStyle);
        const tabLinks = this.template.querySelectorAll('.slds-vertical-tabs__link');
    }

    async handleTabClick(event) {
        event.preventDefault();
        const idUnparsed = event.currentTarget.id;
        const id= idUnparsed.split('-')[0];
        import(id)
            .then(({ default: ctor }) => this.componentConstructor = ctor)
            .catch(err => console.log('Error importing component'));
      
    }
}