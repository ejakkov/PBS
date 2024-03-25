import { LightningElement, api } from 'lwc';

export default class BaseModal extends LightningElement {
    @api isOpen = false;
    connectedCallback() {
        console.log(this.isOpen);
    }

    openModal() {
        this.isOpen = true;
    }

    closeModal() {
        console.log('close');
        this.isOpen = false;
        console.log(this.isOpen);
    }
}
