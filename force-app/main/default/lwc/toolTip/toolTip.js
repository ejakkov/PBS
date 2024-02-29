import { LightningElement, api } from 'lwc';

export default class ToolTip extends LightningElement {
    @api iconType = 'utility:info'; // Default icon type

    renderedCallback(){
        console.log(this.iconType);
    }
    handleMouseEnter() {
        this.template.querySelector('.tooltip').classList.add('show');
    }

    handleMouseLeave() {
        this.template.querySelector('.tooltip').classList.remove('show');
    }
}