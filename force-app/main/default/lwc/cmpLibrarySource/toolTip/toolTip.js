import { LightningElement, api } from 'lwc';

export default class ToolTip extends LightningElement {
    @api iconType = 'utility:info'; // Default icon type
    @api linkText = null; // Default link text

    renderedCallback(){
        console.log('isIconType: ', this.isIconType);
    }

    get isIconType() {
        return this.linkText == null;
    }

    handleMouseEnter() {
        this.template.querySelector('.tooltip').classList.add('show');
    }

    handleMouseLeave() {
        this.template.querySelector('.tooltip').classList.remove('show');
    }
}