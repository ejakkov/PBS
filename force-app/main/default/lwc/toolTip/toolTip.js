import { LightningElement, api, track } from 'lwc';

export default class ToolTip extends LightningElement {
    @api iconType = 'utility:warning'; // Default icon type

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