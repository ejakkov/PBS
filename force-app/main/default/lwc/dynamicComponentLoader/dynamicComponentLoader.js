import { LightningElement, api } from 'lwc';

export default class DynamicComponentLoader extends LightningElement {
    @api componentName;

    async connectedCallback() {
        try {
            // Dynamically import the component using its name
            const module = await import(`@salesforce/resourceUrl/${this.componentName}`);
            // Load the component and append it to the DOM
            const container = this.template.querySelector('.container');
            const component = document.createElement('template');
            component.innerHTML = module.default;
            container.appendChild(component.content.cloneNode(true));
        } catch (error) {
            console.error(`Error importing component ${this.componentName}:`, error);
        }
    }
}
