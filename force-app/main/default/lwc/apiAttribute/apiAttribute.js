import { LightningElement, api } from 'lwc';

export default class ApiAttribute extends LightningElement {
    @api apiName;
    @api defaultValue;
    @api description;
}