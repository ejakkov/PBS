import { LightningElement, api } from 'lwc';

export default class ComponentDescription extends LightningElement {
    @api attributes = [];

    connectedCallback() {
        this.apiAttributes = Array.from(this.template.querySelectorAll('[slot="api-attribute"]')).map(slot => slot.textContent);
    }
}