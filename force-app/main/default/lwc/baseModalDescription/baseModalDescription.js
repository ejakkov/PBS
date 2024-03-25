import { LightningElement, track } from 'lwc';

export default class BaseModalDescription extends LightningElement {
    @track isOpen = false;
    apiAttributes = [
        {
            id: '1',
            apiName: 'variant',
            defaultValue: 'A',
            description: 'Sets the card base variant'
        },
        {
            id: '2',
            apiName: 'is-separator-visible',
            defaultValue: 'false',
            description: 'Sets a separator line between header and body'
        },
        {
            id: '3',
            apiName: 'is-footer-centered',
            defaultValue: 'false',
            description: 'Makes the footer centered'
        }
    ];
    handleClick(){
        this.isOpen = true;
        console.log(this.isOpen);
    }
    handleClickClose(){
        this.isOpen = false;
        console.log(this.isOpen);
    }

    handleOpenModal() { 
        const modal = this.template.querySelector("c-base-modal");
        modal.open();
      }
}