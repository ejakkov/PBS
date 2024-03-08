import { LightningElement, api } from 'lwc';

export default class ComponentDescription extends LightningElement {
    @api attributes = [];
    @api apiName;
    @api defaultValue;
    @api description;
    apiAttributes = [];
    connectedCallback() {
        // Populate apiAttributes array with the attributes received from the parent component
        this.apiAttributes = this.attributes.map((attr, index) => ({
            key: index.toString(),
            apiName: attr.apiName || '',
            defaultValue: attr.defaultValue || '',
            description: attr.description || ''
        }));
    }
}