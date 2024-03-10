import { LightningElement, api } from 'lwc';

export default class ComponentDescription extends LightningElement {
    @api attributes = [];
    @api apiName;
    @api defaultValue;
    @api description;
}