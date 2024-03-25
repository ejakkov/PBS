import { LightningElement, track } from 'lwc';

export default class BaseModalDescription extends LightningElement {
    @track isOpen = false;
    handleClick(){
        this.isOpen = true;
        console.log(this.isOpen);
    }
}