import { LightningElement, api } from 'lwc';

export default class BaseModal extends LightningElement {
    @api isOpen = false;
    modalWidth;

    renderedCallback() {
      if (this.isOpen) {
        const contentElement = this.template.querySelector('.slds-modal__content');
        if (contentElement) {
          const contentWidth = contentElement.offsetWidth;
          const maxWidth = 600; 
          if (maxWidth < contentWidth){}
          this.modalWidth = `min-width: ${Math.min(contentWidth + 40, maxWidth)}px;`;
        }
      }
    }
    
    @api open() {
    this.isOpen = true;
  }

    closeModal() {
        this.isOpen = false;
    }

}
