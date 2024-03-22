import { LightningElement, track, api } from 'lwc';

export default class BaseModal extends LightningElement {
    @api isOpen = false;

    openModal() {
        this.isOpen = true;
    }

    closeModal() {
        this.isOpen = false;
    }
}