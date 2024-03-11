import { LightningElement, api, track } from 'lwc';

export default class ToolTip extends LightningElement {
    @api iconType = 'utility:info'; // Default icon type
    @api linkText = null; // Default link text
    @api link = "javascript:void(0);"; //Default link

    get isIconType() {
        return this.linkText == null;
    }

    handleMouseEnter(event) {
        this.template.querySelector('.tooltip').classList.add('show');
    }

    handleMouseLeave() {
        this.template.querySelector('.tooltip').classList.remove('show');

    }

}