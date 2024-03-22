import { LightningElement, track } from 'lwc';

export default class BaseModalDescription extends LightningElement {
    @track isItOpen = false;
    handleClick(){
        this.isItOpen = true;
    }
}