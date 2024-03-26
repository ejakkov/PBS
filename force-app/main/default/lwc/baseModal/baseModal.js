import { LightningElement, api } from 'lwc';

export default class BaseModal extends LightningElement {
    isOpen = false;
    
    @api open() {
    this.isOpen = true;
  }

    closeModal() {
        this.isOpen = false;
    }

}
